// test.js

jest.mock('./foo'); // this happens automatically with automocking
const foo = require('./foo');
const fooConsumer = require('./foo-consumer');

// foo is a mock function
foo.mockImplementation(() => 'mock');
foo();


it('foo', () => {
  expect(foo()).toBe('mock')
})


it('fooConsumer', () => {
  expect(fooConsumer()).toBe('mock')
})


