import { combineReducers } from "redux";


const animalReducer = function (
  state = { wurd: "cunt" },
  action) {
  switch (action.type) {
    case 'wholesomeize': 
      return { wurd: action.data.string }
    default:
      return state;
  }
}






export default combineReducers({animalReducer});