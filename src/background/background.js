import JSZip from 'jszip';

const makeFileSystemSafeName = input => input
  .replace(/https:\/\//, '') // remove protocol
  .replace(/[<>:"\\|?*/]/g, '-') // replace invalid filename characters with dash
  .replace(/^-+|-+$/g, ''); // clean up leading or trailing dashes

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
      const imageName = url.match(/[^/]+$/)[0];
      zip.file(makeFileSystemSafeName(imageName), blob);
    });

    zip.generateAsync({ type: 'blob' })
      .then(zipFile => {
        const url = URL.createObjectURL(zipFile);
        chrome.downloads.download({ url, filename: `${makeFileSystemSafeName(sender.tab.url)}.zip` });
      });

    return true; // Tell chrome to wait for async sendResponse
  }
});
