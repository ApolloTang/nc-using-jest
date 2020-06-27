import SoundPlayer from './sound-player';
import SoundPlayerConsumer from './sound-player-consumer';

jest.mock('./sound-player');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  SoundPlayer.mockClear();
});

it('The consumer should be able to call new() on SoundPlayer', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  // Ensure constructor created the object:
  expect(soundPlayerConsumer).toBeTruthy();
});

it('We can check if the consumer called the class constructor', () => {
  new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});


it('Show that mockClear() is working', () => {
  expect(SoundPlayer).not.toHaveBeenCalled();

  new SoundPlayerConsumer();
  // Constructor should have been called again:
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});


it('Using mock implimentation', () => {
  SoundPlayer.playSoundFile = jest.fn()
  SoundPlayer.playSoundFile()
  expect(SoundPlayer.playSoundFile).toHaveBeenCalledTimes(1);
});

it.only('no name', () => {
  SoundPlayer.mockImplementation(()=>console.log('fff'))

  // const soundPlayerConsumer = new SoundPlayerConsumer();
  // soundPlayerConsumer.playSomethingCool()

  SoundPlayer()
  expect(SoundPlayer).toHaveBeenCalledTimes(1);

  // expect('foo').toBe('foo')
});


