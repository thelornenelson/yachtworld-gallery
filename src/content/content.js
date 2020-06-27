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
const zoomControl = document.querySelector('#pswp__zoom');

const getImageUrls = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const thumbnails = document.querySelectorAll('.galleria-thumbnails .galleria-image img');
      const urls = [];
      thumbnails.forEach(thumbnail => {
        const url = new URL(thumbnail.getAttribute('src'));
        urls.push(`${url.origin}${url.pathname}`)
      });
      resolve(urls);
    }, 5000); // just wait until thumbnails load and placeholder data uris have been updated for the real thing.
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
  };

  zoomControl.addEventListener('mousedown', e => e.stopPropagation());

  launchButton.addEventListener('click', () => {
    const gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI, items, options);

    const onZoomChange = e => {
      const zoomLevel = parseInt(e.target.value, 10);
      const { initialZoomLevel } = gallery.currItem;
      const targetZoomLevel = initialZoomLevel + (zoomLevel / 10) * (1 - initialZoomLevel);
      gallery.zoomTo(targetZoomLevel, { x: gallery.viewportSize.x / 2, y: gallery.viewportSize.y / 2 }, 333);
    }

    zoomControl.addEventListener('change', onZoomChange);

    gallery.listen('afterChange', () => { zoomControl.value = 0; });
    gallery.listen('destroy', () => zoomControl.removeEventListener('change', onZoomChange));

    if (gallery.options.mouseUsed) {
      gallery.options.closeOnVerticalDrag = false;
    } else {
      gallery.listen('mouseUsed', () => {
        gallery.options.closeOnVerticalDrag = false;
      });
    }

    zoomControl.value = 0;
    gallery.init();
  });

  launchButton.disabled = false;
};

main();
