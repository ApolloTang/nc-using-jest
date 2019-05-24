// Setup and teardown

let foo = 1;

beforeEach(() => {
  console.log('before, foo: ', foo)
});

afterEach(() => {
  foo++
  console.log('after: foo just incresed ----------')
});

test('first test', () => {
  console.log('first test running')
  expect(foo).toBe(1);
});

test('second test', () => {
  console.log('second test running')
  expect(foo).toBe(1);
});
