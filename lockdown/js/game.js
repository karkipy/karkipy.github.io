let gameController;


function clearAll() {
  ctx.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
}

function mainLoop() {
  clearAll();
  gameController.draw();
  animationReq = requestAnimationFrame(mainLoop);
}


function init() {
  gameController=  new GameController(ctx);
  mainLoop();
}


window.addEventListener('keydown', (e) => {
  gameController.updateKey(e.keyCode)
})

window.addEventListener('keyup', (e) => {
  gameController.removeKey(e.keyCode);
});