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

const getImageUrls = () => {
  return new Promise(resolve => {
    // Thumbnails get loaded with data uris and image urls are lazy loaded
    // Rather than adding a whole bunch of load listeners and risking timing issues,
    // we just poll until all the urls have been populated.
    const interval = setInterval(() => {
      const thumbnails = document.querySelectorAll('.galleria-thumbnails .galleria-image img');
      const urls = [...thumbnails].map(thumbnail => new URL(thumbnail.getAttribute('src')));
      const nullOriginCount = urls.filter(({ origin }) => origin === 'null').length;

      console.log(`Waiting on ${nullOriginCount} thumbnail urls to load`);

      if (nullOriginCount === 0) {
        clearInterval(interval);
        resolve(urls.map(url => `${url.origin}${url.pathname}`));
      }
    }, 250);
  })
};

const main = async () => {
  const imageUrls = await getImageUrls();
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

  launchButton.addEventListener('click', () => {
    const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI, items, options);

    // Update index so gallery re-opens to same slide
    gallery.listen('afterChange', () => { options.index = gallery.getCurrentIndex(); });

    // Bug fix to prevent gallery from closing on vertical drag
    if (gallery.options.mouseUsed) {
      gallery.options.closeOnVerticalDrag = false;
    } else {
      gallery.listen('mouseUsed', () => {
        gallery.options.closeOnVerticalDrag = false;
      });
    }

    gallery.init();
  });

  launchButton.disabled = false;
};

main();
