// sound-player.js
export default class SoundPlayer {
  constructor() {
    console.log('xxxx SoundPlayer.constructor this should not be called')
    this.foo = 'bar';
  }

  playSoundFile(fileName) {
    console.log('xxxx SoundPlayer.playSoundFile this should not be called')
    console.log('Playing sound file ' + fileName);
  }
}
