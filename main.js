let fpsText = null;
let lastTimestamp = performance.now();
let lastFps = null;

const init = () => {
  fpsText = document.getElementById("fpsText");
};

const step = (timestamp) => {
  const duration = timestamp - lastTimestamp;
  if (duration > 0) {
    const fps = (1000 / duration).toFixed(1);
    if (fps !== lastFps) {
      fpsText.textContent = `${fps}fps`;
      lastFps = fps;
    }
  }

  lastTimestamp = timestamp;
  requestAnimationFrame(step);
};

window.onload = () => {
  init();
  step();
};
