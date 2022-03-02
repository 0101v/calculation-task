/* eslint-disable no-undef */

import {
  ADD_NUMBER, ADD_OPERATION, ADD_DOT, ADD_LEFT_BRACKET, ADD_RIGHT_BRACKET,
  RESULT_EXPRESSION, 
  CLEAR_HISTORY, CLEAR_ALL, CLEAR_LAST_VALUE_AND_EXPRESSION,
  } from '@/actions'

import resultCalculatorFunction from '@/helpers/calculator'

const INITIAL_STATE = {
  expression: '0',
  history: [],
}

const addNumberFunction = (state, {payload}) => {
  const {expression} = state
  const lastOperation = expression[expression.length - 1]

  if (payload === '0' && lastOperation === ' ') {
    return {...state, expression: state.expression + '0.'}
  }
  if (expression.length === 1 && expression[0] === '0') {
    return {...state, expression: payload}
  }
  return {...state, expression: state.expression + payload}
}

const addOperationFunction = (state, {payload}) => {
  const {expression} = state
  const lastOperation = expression[expression.length - 1]
  if (lastOperation === ' ') {
    return {...state, expression: expression.slice(0, expression.lastIndexOf(' ') - 1) + ` ${payload} `}
  }
  return {...state, expression: state.expression + ` ${payload} `}
}

const addDotFunction = state => {
  const {expression} = state
  const lastOperand = expression[expression.length - 1]

  if (lastOperand === ')' || lastOperand === '.') {
    return state
  }
  if (lastOperand === ' ') {
    return {...state, expression: expression + '0.'}
  }

  const arr = expression.split(' ')
  const findCopyDot = arr[arr.length - 1]
  if ([...findCopyDot].filter(el => el === '.').length === 1) return state
  
  return {...state, expression: expression + '.'}
}

const addLeftBracketFunction = state => {
  const {expression} = state
  const leftBracketLength = [...expression].filter(el => el === '(').length
  const rightBracketLength = [...expression].filter(el => el === ')').length
  const lastOperand = expression[expression.length - 2]

  if ((leftBracketLength === rightBracketLength) && lastOperand !== ')') {
    if (lastOperand === '-' || lastOperand === '+' || lastOperand === '*' || lastOperand === '/') return {...state, expression: expression + '( '}
  }

  return state
}

const addRightBracketFunction = state => {
  const {expression} = state
  const leftBracketLength = [...expression].filter(el => el === '(').length
  const rightBracketLength = [...expression].filter(el => el === ')').length
  const lastOperand = expression[expression.length - 1]

  if ((leftBracketLength > rightBracketLength) && lastOperand !== ' ') return {...state, expression: expression + ')'}
  
  return state
}

const resultFunction = state => {
  const {expression} = state

  if (expression.indexOf(' ') === -1 || expression[expression.length - 1] === ' ') return state
  // if (Number.isNaN(+expression) && expression[expression.length - 1] === ' ') expression += expression.slice(0, expression.indexOf(' '))
  // let result = new Function('return ' + expression)() + ''
  let result = resultCalculatorFunction(expression) + ''
  result = result.slice(0, result.indexOf('.') + 4)
  const historyExpression = `${expression} = ${result}`

  return {...state, expression: result, history: [...state.history, historyExpression]}
}

const clearLastOperationFunction = state => {
  let {expression} = state
  
  if (expression.length === 1) return {...state, expression: '0'}
  if (expression[expression.length - 1] === ' ') {
    expression = expression.slice(0, expression.length - 2)
    if (expression[expression.length - 1] === ' ') {
      return {...state, expression: expression.slice(0, expression.length - 1)}
    }
  }
  
  return {...state, expression: expression.slice(0, expression.length - 1)}
}

const calculatorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NUMBER:      
      return addNumberFunction(state, action)
    case ADD_OPERATION:      
      return addOperationFunction(state, action)
    case ADD_DOT:      
      return addDotFunction(state)
    case ADD_LEFT_BRACKET:      
      return addLeftBracketFunction(state)
    case ADD_RIGHT_BRACKET:      
      return addRightBracketFunction(state)
    case RESULT_EXPRESSION:
      return resultFunction(state)
    case CLEAR_ALL:
      return {...state, expression: '0'}
    case CLEAR_LAST_VALUE_AND_EXPRESSION:
      return clearLastOperationFunction(state)
    case CLEAR_HISTORY:
      return {...state, history: []}
    default: 
      return state 
  }
}

export default calculatorReducer