import { combineReducers } from 'redux';
import { DATA_AVAILABLE } from "../actions/"; //Import the actions types constant we defined in our actions

let dataState = { data: [], loading:true };

const dataReducer = (state= dataState, action) => {
  switch(action.type){
    case DATA_AVAILABLE:
      state = Object.assign({}, state, { data: action.data, loading: false });
      return state;
    default:
      return state;
  }
};

// Combine all reducers
const rootReducer = combineReducers({
  dataReducer
  //,[Another reducer]
})

export default rootReducer;