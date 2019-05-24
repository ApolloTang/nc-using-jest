// Setup and teardown

let foo = 1;

beforeEach(() => {
  console.log('>>> before, foo: ', foo)
});

afterEach(() => {
  foo++
  console.log('<<< after: foo just incresed')
});




test('1st test', () => {
  console.log('           1st test running')
  expect(foo).toBe(1);
});

test('2nd test', () => {
  console.log('            2nd test running')
  expect(foo).toBe(1);
});






describe('Here is a describe block', () => {

  test('3rd test', () => {
    console.log('           3rd test running')
    expect(foo).toBe(1);
  });

  test('4th test', () => {
    console.log('           4th test running')
    expect(foo).toBe(1);
  });

})
