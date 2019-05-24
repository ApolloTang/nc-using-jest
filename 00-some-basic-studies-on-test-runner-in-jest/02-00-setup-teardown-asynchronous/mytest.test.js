// Setup and teardown Asynchronous

let foo = 1

beforeEach(() => {
  return new Promise(rs=>{
    console.log('...before each pending')
    setTimeout( ()=>{
      rs();
      console.log('before resolved ')
    }, 2000)
  })
})

afterEach(() => {
  return new Promise(rs=>{
    console.log('...after each pending')
    setTimeout( ()=>{
      rs();
      console.log('after resolved')
    }, 2000)
  })
});

test('first test', (done) => {
  console.log('first test running')
  expect(foo).toBe(1);
  done()
});

test('second test', (done) => {
  console.log('second test running')
  expect(foo).toBe(2);
  done()
});
