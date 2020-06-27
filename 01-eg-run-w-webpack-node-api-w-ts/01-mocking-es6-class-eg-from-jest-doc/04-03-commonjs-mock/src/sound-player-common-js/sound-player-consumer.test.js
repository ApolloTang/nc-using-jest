const SoundPlayerConsumer = require('./sound-player-consumer');

jest.mock('./sound-player');
const SoundPlayer = require('./sound-player');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  SoundPlayer.mockClear();
});


it.only('can call Sondplayer consturtor', () => {
  // const soundPlayerConsumer = new SoundPlayerConsumer();
  // soundPlayerConsumer.playSomethingCool()
  //
  new SoundPlayer()
  // expect(SoundPlayer.playSoundFile).toHaveBeenCalledTimes(1);
  expect(SoundPlayer).toHaveBeenCalledTimes(1);

  expect('foo').toBe('foo')
});


it.only('can mock SoundPlayer constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  soundPlayerConsumer.playSomethingCool()
  expect(SoundPlayer).toHaveBeenCalledTimes(1);

  expect('foo').toBe('foo')
});


it.only('can mock impliment method in SoundPlayer', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  soundPlayerConsumer.playSomethingCool()

  /* want to do the following
   expect(soundPlayerInstance.playSoundFile).toHaveBeenCalledTimes(1);
    but we have no acceess to soundPlayerInstance instantiated in SoundPlayerConsume class
  */
});
