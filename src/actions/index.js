
export const ADD_NUMBER = 'ADD_NUMBER'
export const ADD_OPERATION = 'ADD_OPERATION'
export const ADD_DOT = 'ADD_DOT'
export const ADD_LEFT_BRACKET = 'ADD_LEFT_BRACKET'
export const ADD_RIGHT_BRACKET = 'ADD_RIGHT_BRACKET'

export const RESULT_EXPRESSION = 'RESULT_EXPRESSION'

export const CLEAR_HISTORY = 'CLEAR_HISTORY'
export const CLEAR_ALL = 'CLEAR_ALL'
export const CLEAR_LAST_VALUE_AND_EXPRESSION = 'CLEAR_LAST_VALUE_AND_EXPRESSION'

export const CHANGE_THEME = 'CHANGE_THEME'

export const addNumber = payload => ({
  type: ADD_NUMBER,
  payload,
})
export const addOperation = payload => ({
  type: ADD_OPERATION,
  payload,
})
export const addDot = () => ({
  type: ADD_DOT,
})
export const addLeftBracket = () => ({
  type: ADD_LEFT_BRACKET,
})
export const addRightBracket = () => ({
  type: ADD_RIGHT_BRACKET,
})
export const resultExpression = () => ({
  type: RESULT_EXPRESSION,
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
export const changeTheme = payload => ({
  type: CHANGE_THEME,
  payload,
})