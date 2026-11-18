if ('serviceWorker' in navigator && window.isSecureContext) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js', {updateViaCache: 'none'});
      await registration.update();
      await navigator.serviceWorker.ready;
    } catch (error) {
      console.warn('Offline setup could not finish.', error);
    }
  });
}
