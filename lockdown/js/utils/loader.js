function showPercentage(loaded, total) {
  clearAll();
  const loadPercentage =  Math.round((loaded / total) * 100);
  ctx.font = "50px";
  ctx.fillText(loadPercentage + "%", 50, 100);

}

window.onload = (e) => {
  let assetsLoaded = 0;
  let images = IMAGES;
  let sounds = SOUNDS;
  let totalAssets = images.length + sounds.length;
  images.forEach(v => { // adding images to loaded Images
    const { id } = v;
    const img = new Image();
    img.src = v.src;
    img.onload = (e) => {
      assetsLoaded += 1;
      loadedImages[id] = img;
      showPercentage(assetsLoaded, totalAssets); // Add an extra function to show progress
      if (totalAssets === assetsLoaded) {
        init();
      }
    }
  });

  sounds.forEach(s => {
    const { src, id } = s;
    const audio = document.createElement("audio");
    audio.src = src;
    audio.setAttribute("preload", "auto");
    audio.setAttribute("controls", "none");
    audio.style.display = "none";
    document.body.appendChild(audio);
    audio.onloadstart = (e) => {
      assetsLoaded +=1;
      loadedSounds[id] = audio;
      showPercentage(assetsLoaded, totalAssets);
      if (totalAssets === assetsLoaded) {
        init();
      }
    }
  });


}