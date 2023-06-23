const tenMinWalk = (arr) => {
  if(arr.length !== 10) {
    return false
  } 
  let north = 0
  let south = 0
  let east = 0
  let west = 0
  arr.forEach(element => {
    if (element === 'n'){
      north++
    } else {
      south++
    }
  });
  if(north>5){
    return false
  }
  if (north == 5 && south == 5) {
  return true
  }
}

module.exports = tenMinWalk