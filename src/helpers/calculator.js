/* eslint-disable no-useless-escape */
const mathSwitch = expression => {
  switch (expression[1]) {
    case '+':
      return Number(expression[0]) + Number(expression[2])
    case '-':
      return Number(expression[0]) - Number(expression[2])
    case '*':
      return expression[0] * expression[2]
    case '/':
      return expression[0] / expression[2]
      default:
        return console.log(expression)
  }
}

const resultCalculatorFunction = expression => {

  if (expression.split(/[\(-\)]/).length > 2) {
    let arr = expression.split(/[\(-\)]/)
    while (arr.length > 2 ) {
      if (arr[1].split(' ').length >= 3) arr[1] = `${math(arr[1])}`
      arr = arr.join('').split(/[\(-\)]/)
    }
    arr = arr.join('')

  return math(arr)
  }

  return math(expression)
}

const math = expression => {
  let arr = expression.split(' ').filter(el => el !== '')
  
  while (arr.indexOf('*') + 1 || arr.indexOf('/') + 1 ) { 
    const indA = arr.indexOf('*') >= 0 ? arr.indexOf('*') : null
    const indB = arr.indexOf('/') >= 0 ? arr.indexOf('/') : null
    let ind
    if ( indA === null || indB === null ) ind = indA === null ? indB : indA
    else {
      ind = indA < indB ? indA : indB
    }

    const arrN = arr.slice(ind - 1, ind + 2)
    if (ind === 1) {
      if (arr.length === 3) return mathSwitch(arrN)
      arr = [ mathSwitch(arrN), ...arr.slice(ind + 2)]
    }
    else {
      arr = [...arr.slice(0, ind - 1), mathSwitch(arrN), ...arr.slice(ind + 2)]
    }
  }
  while (arr.length !== 1) {
    if (arr.length === 3) {
      return mathSwitch([arr[0], arr[1], arr[2]])
    }
    else {
      arr = [ mathSwitch([arr[0], arr[1], arr[2]]), ...arr.slice(3)]
    }
  }
}
export default resultCalculatorFunction