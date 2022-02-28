// import { handleActions } from 'redux-actions'
import action from '@/actions'

const INITIAL_STATE = {}

// export default handleActions({}, INITIAL_STATE)

const calculatorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACTION':
      
      break
  
    default: 
      return state 
  }
}



export default calculatorReducer