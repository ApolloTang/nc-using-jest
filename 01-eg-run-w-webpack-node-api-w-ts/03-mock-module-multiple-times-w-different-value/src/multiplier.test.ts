// import { multiplier } from "./multiplier"  // <-- this will not work

describe("[multiplier]", () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('should mock getNumber so that getNumber return 3', () => {
    const mockReturn = 3

    jest.mock( './get-number', () => (
      { getNumber: jest.fn(()=>mockReturn) }
    ))

    const { multiplier } = require('./multiplier')
    expect(multiplier(2)).toBe(6)
  })

  it('should mock getNumber so that getNumber return 4', () => {
    const mockReturn = 4

    jest.mock( './get-number', () => (
      { getNumber: jest.fn(()=>mockReturn) }
    ))

    const { multiplier } = require('./multiplier')
    expect(multiplier(2)).toBe(8)
  })

  it('should mock getNumber so that getNumber return 5', () => {
    const mockReturn = 5

    jest.mock( './get-number', () => (
      { getNumber: jest.fn(()=>mockReturn) }
    ))

    const { multiplier } = require('./multiplier')
    expect(multiplier(2)).toBe(10)
  })
})

