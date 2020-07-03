import JSZip from 'jszip';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Sender:', sender);
  console.log('Message:', request);
  if (request.downloadList) {
    const zip = new JSZip();

    const savePage = new Promise(resolve => {
      chrome.pageCapture.saveAsMHTML({ tabId: sender.tab.id }, data => resolve(data));
    });

    savePage.then(data => {
      sendResponse('page captured');
      return data;
    });

    zip.file('listing.mhtml', savePage);

    request.downloadList.forEach((url, index) => {
      const blob = fetch(url).then(r => r.blob());
      zip.file(`${index}.jpg`, blob);
    });

    zip.generateAsync({ type: 'blob' })
      .then(zipFile => {
        const url = URL.createObjectURL(zipFile);
        const handlizedUrl = sender.tab.url
          .replace(/https:\/\//, '') // remove protocol
          .replace(/[<>:"\\|?*/.]/g, '-') // replace invalid filename characters with dash
          .replace(/^-+|-+$/g, '') // clean up leading or trailing dashes

        console.log('filename', handlizedUrl);
        chrome.downloads.download({ url, filename: `${handlizedUrl}.zip` });
      });

    return true; // Tell chrome to wait for async sendResponse
  }
});
