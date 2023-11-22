import { ImageProbe } from '@zerodeps/image-probe';

import { Buffer } from 'buffer/';

export default function imageProbeFetch(url, cache) {
  const controller = new AbortController();
  const { signal } = controller;

  const cachedSize = cache.get(url);

  if (cachedSize) {
    return Promise.resolve(cachedSize);
  }

  return fetch(url, { signal })
    .then(response => {
      const reader = response.body.getReader();
      let result = null;
      let size;

      return reader.read()
        .then(function process({ done, value }) {
          if (done) return;

          if (result !== null) {
            result = Buffer.concat([result, Buffer.from(value)]);
          } else {
            result = Buffer.from(value);
          }

          try {
            // ImageProbe attempts to read an offset value in the buffer
            // If that offset is beyond the end of the buffer, an error
            // is thrown.
            size = ImageProbe.fromBuffer(result)
            if (size) {
              controller.abort();
              return;
            }
          } catch (e) {
            console.warn('Unable to determine image size, will keep trying', e);
          }

          // Otherwise continue reading stream
          return reader.read().then(process);
        })
        .then(() => {
          cache.set(url, size);
          console.log('size', size);
          return size;
        });
    });
}
