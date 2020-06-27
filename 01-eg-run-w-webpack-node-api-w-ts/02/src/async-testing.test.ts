function sleep(ms:number=1000) {
  return new Promise<number>(rs=>setTimeout(rs, ms))
}

type T = string
function returnResolvedPromise(data:T):Promise<T> {
  return new Promise( async(resolve) => {
    await sleep()
    resolve(data);
  });
};

function returnRejectedPromise(data:T):Promise<T> {
  return new Promise( async(resolve, reject) => {
    await sleep()
    reject(data);
  });
};

it('Using "done"', done => {
  const data = 'resolved'
  returnResolvedPromise(data).then(d=>{
    expect(d).toBe(data);
    done()
  })
});


it('return promise', () => {
  const data = 'resolved'
  return returnResolvedPromise(data).then(d=>{
    expect(d).toBe(data);
  })
});


it('return promise catch rejection', () => {
  const error = 'reject'
  expect.assertions(1) // add expect.assertions to verify that a certain number of assertions are called
  return returnRejectedPromise(error).catch(e=>{
    expect(e).toBe(error);
  })
});


test('Using resolve', () => {
  const data = 'resolved'
  return expect(
    returnResolvedPromise(data)
  ).resolves.toBe(data);
});


test('Using reject', () => {
  const data = 'reject'
  return expect(
    returnRejectedPromise(data)
  ).rejects.toBe(data);
});


