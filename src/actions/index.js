
export const ADD_NUMBER = 'ADD_NUMBER'
export const ADD_OPERATION = 'ADD_OPERATION'
export const CLEAR_HISTORY = 'CLEAR_HISTORY'
export const CLEAR_ALL = 'CLEAR_ALL'
export const CLEAR_LAST_VALUE_AND_EXPRESSION = 'CLEAR_LAST_VALUE_AND_EXPRESSION'

export const addNumber = payload => ({
  type: ADD_NUMBER,
  payload,
})
export const addOperation = payload => ({
  type: ADD_OPERATION,
  payload,
})
export const clearHistory = () => ({
  type: CLEAR_HISTORY,
})
export const clearAll = () => ({
  type: CLEAR_ALL,
})
export const clearLast = () => ({
  type: CLEAR_LAST_VALUE_AND_EXPRESSION,
})

