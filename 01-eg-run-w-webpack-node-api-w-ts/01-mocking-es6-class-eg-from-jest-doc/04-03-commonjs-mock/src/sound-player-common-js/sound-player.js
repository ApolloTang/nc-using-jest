// sound-player.js
module.exports = class SoundPlayer {
  constructor() {
    console.log('xxxx SoundPlayer.constructor called')
    this.foo = 'bar';
  }

  playSoundFile(fileName) {
    console.log('Playing sound file ' + fileName)
  }
}
