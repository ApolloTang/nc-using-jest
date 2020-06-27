// sound-player.js
export default class SoundPlayer {
  constructor() {
    console.log('SoundPlayer.constructor called')
    this.foo = 'bar'
  }

  playSoundFile(fileName) {
    console.log('Playing sound file ' + fileName)
  }
}
