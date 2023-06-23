const tenMinWalk = require('./tenMinWalk.js')

describe('tenMinWalk', ()=> {
  it('should return true if the array is of length 10', ()=>{
    const response = tenMinWalk(['n','n','n','n','n','s','s','s','s','s']);
    expect(response).toEqual(true)
  })
  it('should return true if the array is of length 20', ()=>{
    const response = tenMinWalk(['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n']);
    expect(response).toEqual(false)
  })
  it('should return false if the array is of length 9', ()=>{
    const response = tenMinWalk(['n','n','n','n','n','n','n','n','n']);
    expect(response).toEqual(false)
  })
  it('should return false if the array is of length 8', ()=>{
    const response = tenMinWalk(['n','n','n','n','n','n','n','n']);
    expect(response).toEqual(false)
  })
  it('should return false if the array is of length 1', ()=>{
    const response = tenMinWalk(['n']);
    expect(response).toEqual(false)
  })
  it('should return false if array only goes north', ()=>{
    const response = tenMinWalk(['n','n','n','n','n','n','n','n','n','n']);
    expect(response).toEqual(false)
  })

})