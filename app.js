//game configuration
let config = {
  renderer: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

// function to bring in images for our application, such as the background.
function preload() {

}
// function to generate elements while will appear in the game
function create() {

}
//function used for updating the bird
function update(){

}