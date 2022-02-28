/* eslint-disable no-undef */

// import { handleActions } from 'redux-actions'
import {
  ADD_NUMBER, ADD_OPERATION, CLEAR_HISTORY, CLEAR_ALL, CLEAR_LAST_VALUE_AND_EXPRESSION,
  addNumber, addOperation, clearAll, clearLast} from '@/actions'

const INITIAL_STATE = {
  num: [],
  operation: null,
  result: 0,

}

// export default handleActions({}, INITIAL_STATE)

const calculatorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NUMBER:      
      return {...state, num: [...state.num, action.payload]}
    case ADD_OPERATION:      
      return {...state, operation: action.payload}
  
    default: 
      return state 
  }
}



export default calculatorReducer