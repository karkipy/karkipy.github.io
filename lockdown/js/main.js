let game;


function clearAll() {
  ctx.clearRect(-SCREEN_WIDTH,0,SCREEN_WIDTH * 9,SCREEN_HEIGHT);
}

function mainLoop() {
  clearAll();
  game.draw();
  animationReq = requestAnimationFrame(mainLoop);
}


function init() {
  game =  new Game(ctx);
  mainLoop();
}


window.addEventListener('keydown', (e) => {
  game.updateKey(e.keyCode)
})

window.addEventListener('keyup', (e) => {
  game.removeKey(e.keyCode);
});