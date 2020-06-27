import SoundPlayer from './sound-player';
import SoundPlayerConsumer from './sound-player-consumer';

const mockPlaySoundFile = jest.fn();
jest.mock('./sound-player', () => {
  return {
    default: jest.fn().mockImplementation(() => {
      return {playSoundFile: mockPlaySoundFile}
    })
  }
});

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  console.log('xxxx SoundPlayer: ', SoundPlayer)
  SoundPlayer.mockClear();
});

it('The consumer should be able to call new() on SoundPlayer', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  // Ensure constructor created the object:
  expect(soundPlayerConsumer).toBeTruthy();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  // Show that mockClear() is working:
  expect(SoundPlayer).not.toHaveBeenCalled();

  const soundPlayerConsumer = new SoundPlayerConsumer();
  // Constructor should have been called again:
  expect(SoundPlayer).toHaveBeenCalledTimes(1);

  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();

  /*
   * mock.instances is available only with automatic mocks:
   * so commented out:
   **/
  // const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
  // const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;

  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);

  // Equivalent to above check:
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
