// test.js


import foo from './foo'
import fooConsumer from './foo-consumer'

jest.mock('./foo'); // this happens automatically with automocking

// foo is a mock function
foo.mockImplementation(() => 'mock');
foo();


it('foo', () => {
  expect(foo()).toBe('mock')
})


it('fooConsumer', () => {
  expect(fooConsumer()).toBe('mock')
})


