/* eslint-disable no-undef */

// import { handleActions } from 'redux-actions'
import {
  ADD_NUMBER, ADD_OPERATION, RESULT_EXPRESSION, CLEAR_HISTORY, CLEAR_ALL, CLEAR_LAST_VALUE_AND_EXPRESSION,
  addNumber, addOperation, resultExpression, clearAll, clearLast, clearHistory} from '@/actions'

const INITIAL_STATE = {
  expression: '0',
  history: [],
}

const addNumberFunction = (state, {payload}) => {
  const {expression} = state
  if (expression.length === 1 && expression[0] === '0') {
    return {...state, expression: payload}
  }
  return {...state, expression: state.expression + payload}
}

const addOperationFunction = (state, {payload}) => {
  const {expression} = state
  if (expression.indexOf(' ') !== -1) {
    return {...state, expression: expression.slice(0, expression.indexOf(' ')) + ` ${payload} `}
  }
  return {...state, expression: state.expression + ` ${payload} `}
}

const resultFunction = state => {
  const {expression} = state

  if (expression.indexOf(' ') === -1 || expression[expression.length - 1] === ' ') return state
  // if (Number.isNaN(+expression) && expression[expression.length - 1] === ' ') expression += expression.slice(0, expression.indexOf(' '))
  let result = eval(expression) + ''
  result = result.slice(0, result.indexOf('.') + 4)
  const historyExpression = `${expression} = ${result}`

  return {...state, expression: result, history: [...state.history, historyExpression]}
}

const clearLastOperationFunction = state => {
  const {expression} = state
  if (expression.length === 1) return {...state, expression: '0'}
  if (expression[expression.length - 1] === ' ') return {...state, expression: expression.slice(0, expression.indexOf(' '))}
  
  return {...state, expression: expression.slice(0, expression.length - 1)}
}

const calculatorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NUMBER:      
      return addNumberFunction(state, action)
    case ADD_OPERATION:      
      return addOperationFunction(state, action)
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