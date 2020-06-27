// sound-player-consumer.js
const SoundPlayer = require('./sound-player');

module.exports = class SoundPlayerConsumer {
  constructor() {
    console.log('xxxx SoundPlayerConsumer.constructor called')
    this.soundPlayer = new SoundPlayer();
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3';
    this.soundPlayer.playSoundFile(coolSoundFileName);
  }
}
