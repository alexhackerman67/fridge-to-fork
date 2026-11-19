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

window.addEventListener("DOMContentLoaded", () => {
  if (!HTMLElement.prototype.showPopover || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const intro = document.createElement("div");
  intro.className = "bite-intro";
  intro.setAttribute("popover", "manual");
  intro.setAttribute("aria-hidden", "true");
  intro.innerHTML = '<div class="bite-boy"><span class="bite-face"></span><span class="bite-fork"></span></div><strong>Fridge to Fork</strong>';
  document.body.append(intro);
  // Open above the first-visit dialog without changing its focus.
  requestAnimationFrame(() => {
    intro.showPopover();
    setTimeout(() => intro.remove(), 1450);
  });
});
