if ("serviceWorker" in navigator) {
  window
    .addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").then((reg) => {
        console.log("service worker registered", reg);
      }).catch((err) => {
        console.warn("service worker failed", err);
      });
    }); 
}
