//Audio when Goomba Dies
function playGoombaDeath() {
  const goombaDeathSound = document.getElementById("goombaDeath");
  goombaDeathSound.play();
}

/*To Add Other Audio Functions:
  function soundFunction() {
    const soundVariable = document.getElementById("soundID");
    soundVariable.play();
  }
*/

//Audio when jumping
function playJump() {
  const PlayerJumpSound = document.getElementById("PlayerJump");
  PlayerJumpSound.play();
}

/*To Add Other Audio Functions:
  function soundFunction() {
    const soundVariable = document.getElementById("soundID");
    soundVariable.play();
  }
*/

//Audio when player Dies
function playPlayerDeath() {
  const playerDeathSound = document.getElementById("PlayerDeath");
  playerDeathSound.play();
}

/*To Add Other Audio Functions:
  function soundFunction() {
    const soundVariable = document.getElementById("soundID");
    soundVariable.play();
  }
*/

//Export Sound
export default playGoombaDeath
export var playJump = playJump()
export var playPlayerDeath = playPlayerDeath()