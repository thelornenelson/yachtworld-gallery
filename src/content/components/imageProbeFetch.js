import { ImageProbe } from '@zerodeps/image-probe';

import { Buffer } from 'buffer/';

export default function imageProbeFetch(url) {
  const controller = new AbortController();
  const { signal } = controller;


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
          size = ImageProbe.fromBuffer(result)
          if (size) {
            controller.abort();
            return;
          }
          // Otherwise continue reading stream
          return reader.read().then(process);
        })
        .then(() => size);
    });
}
