// Styles (so webpack processes sass)
import './content.scss';

// Markup (to inject)
import launcherMarkup from './components/launcher.html';
import galleryMarkup from './components/gallery.html';

// Photoswipe

import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI from './components/photoswipe-ui';

import imageProbeFetch from './components/imageProbeFetch';

// Inject markup
document.body.insertAdjacentHTML('beforeend', launcherMarkup);
document.body.insertAdjacentHTML('beforeend', galleryMarkup);

const launchButton = document.querySelector('[data-ywzg-gallery-open]');
const downloadButton = document.querySelector('[data-ywzg-download-all]');

const getImageUrls = () => {
  try {
    // this should be something like `var __REDUX_STATE__=...`
    const stateJS = Array.prototype.filter
      .call(document.querySelectorAll('script'), a => a.innerHTML.includes('__REDUX_STATE__'))[0].innerHTML;

    // We don't have access to the document's window object, so we can't get this state directly.
    // Instead we have to parse the JS and return the value in our own context.
    const getState = new Function(`${stateJS}; return __REDUX_STATE__;`);

    const images = getState().app.data.media.filter(({ mediaType }) => mediaType === 'image');

    // parse src as URL to ensure there are no query params
    const urls = images
      .map(image => image.url)
      .map(urlString => new URL(urlString))
      .map(url => `${url.origin}${url.pathname}`);

    return urls;
  } catch (e) {
    console.log('Unable to find image urls', e);
    return [];
  }
};

const main = async () => {
  // This could be improved to launch the gallery as soon as we have the first image,
  // then dynamically add all other images as data is retrieved.
  const imageUrls = getImageUrls();

  if (!imageUrls.length) {
    launchButton.style.display = 'none';
    return;
  }

  const imageSizes = await Promise.all(imageUrls.map(url => imageProbeFetch(url)));

  const items = imageUrls.map((url, i) => ({
    src: url,
    w: imageSizes[i].width,
    h: imageSizes[i].height,
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
    getDoubleTapZoom: (isMouseClick, item) =>  Math.min(1, item.initialZoomLevel * 2),
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
