module.exports = function check(str, bracketsConfig) {
  let pairBrackets = []
  let element = ''
  let bracketsChecker =0

  // Parse bracketsConfig for pairs of brackets
  for (let x = 0; x < bracketsConfig.length; x++) {
    for (let y = 0; y < bracketsConfig[x].length; y++) {
      element = element + bracketsConfig[x][y]
    }
    pairBrackets.push(element)
    element = ''
  }
  
  //Find pair of brackets and exclude from srt
  while(bracketsChecker <= pairBrackets.length){
     
    for (let bracketsCounter = 0; bracketsCounter < pairBrackets.length; bracketsCounter++) {
      if(str.includes(pairBrackets[bracketsCounter])) {
        str = str.replace(pairBrackets[bracketsCounter], '')
        bracketsChecker = 0
      } else {
        bracketsChecker++
      }
    }
    if (str.length === 0) {
      return true
    }
  }
  return false
}
