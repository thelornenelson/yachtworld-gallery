// Styles (so webpack processes sass)
import './content.scss';

// Markup (to inject)
import launcherMarkup from './components/launcher.html';
import galleryMarkup from './components/gallery.html';

// Photoswipe

import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI from './components/photoswipe-ui';

import imageProbeFetch from './components/imageProbeFetch';
import SizeCache from './components/sizeCache';

// Inject markup
document.body.insertAdjacentHTML('beforeend', launcherMarkup);
document.body.insertAdjacentHTML('beforeend', galleryMarkup);

const launchButton = document.querySelector('[data-ywzg-gallery-open]');
const downloadButton = document.querySelector('[data-ywzg-download-all]');

const insertMessageScript = () => {
  const scriptEl = document.createElement('script');
  const script = "window.postMessage({ type: 'REDUX_STATE', state: __REDUX_STATE__ })";
  scriptEl.appendChild(document.createTextNode(script));
  document.body.append(scriptEl);
}

const getImageUrls = new Promise(resolve => {
  insertMessageScript();

  window.addEventListener('message', e => {
    if (e.source != window) return;

    if (e.data.type && e.data.type === 'REDUX_STATE') {
      const state = e.data.state;

      if (!state) resolve([]);

      const images = state.app.data.media.filter(({ mediaType }) => mediaType === 'image');

      // parse src as URL to ensure there are no query params
      const urls = images
        .map(image => image.url)
        .map(urlString => new URL(urlString))
        .map(url => `${url.origin}${url.pathname}`);

      resolve(urls);
    }
  });
});

const main = async () => {
  // This could be improved to launch the gallery as soon as we have the first image,
  // then dynamically add all other images as data is retrieved.
  const imageUrls = await getImageUrls;

  if (!imageUrls.length) return;

  launchButton.style.display = 'block';

  const sizeCache = new SizeCache({ id: 'yw-gallery-size-cache-v1' });

  const imageSizes = await Promise.all(imageUrls.map(url => imageProbeFetch(url, sizeCache)));

  sizeCache.save();

  const items = imageUrls.map((url, i) => ({
    src: url,
    w: imageSizes[i] ? imageSizes[i].width : 500,
    h: imageSizes[i] ? imageSizes[i].height : 500,
    title: url,
  }));

  console.log(items);

  const pswpElement = document.querySelector('.pswp');

  const options = {
    bgOpacity: 0.9,
    index: 0, // start at first slide
    clickToCloseNonZoomable: false,
    history: false,
    closeOnVerticalDrag: false,
    closeOnScroll: false,
    pinchToClose: false,
    getDoubleTapZoom: (isMouseClick, item) => Math.min(1, item.initialZoomLevel * 2),
    isClickableElement: el => el.tagName === 'A' || el.classList.contains('pswp__zoom'),
    closeElClasses: [],
  };

  let gallery = null;

  const openGallery = () => {
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI, items, options);

    // Update index so gallery re-opens to same slide
    gallery.listen('afterChange', () => { options.index = gallery.getCurrentIndex(); });
    gallery.listen('destroy', () => { gallery = null });

    // Bug fix to prevent gallery from closing on vertical drag
    if (gallery.options.mouseUsed) {
      gallery.options.closeOnVerticalDrag = false;
    } else {
      gallery.listen('mouseUsed', () => {
        gallery.options.closeOnVerticalDrag = false;
      });
    }

    gallery.init();
  };

  launchButton.addEventListener('click', openGallery);

  downloadButton.addEventListener('click', () => {
    if (!gallery) return;
    gallery.listen('destroy', () => {
      // Show details and specs at once so it is all captured
      const info = document.querySelectorAll('.boat-details-content .collapse-content-details');
      const displayState = [...info].map(el => el.classList.contains('open'));
      info.forEach(el => {
        el.classList.remove('closed');
        el.classList.add('open');
      });

      // Hide extension elements because injected stylesheets
      // are not included in page capture
      const extensionUI = document.querySelectorAll('.pswp, .yqzg-launcher');
      extensionUI.forEach(el => el.style.display = 'none');

      // Wait to ensure styles are applied
      window.requestAnimationFrame(() => {
        chrome.runtime.sendMessage({ downloadList: imageUrls }, response => {
          if (response === 'page captured') {
            // Return to original view once page is captured.
            info.forEach(el => el.classList.remove('open'));
            info.forEach((el, i) => el.classList.add(displayState[i] ? 'open' : 'closed'));
            extensionUI.forEach(el => el.style.display = '');
            openGallery();
          }
        });
      });
    });

    gallery.close();
  });

  launchButton.disabled = false;
};

main();
