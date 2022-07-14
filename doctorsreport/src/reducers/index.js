import { combineReducers } from "redux";
import doctors from './docUsers'
// import student from './student'
const allReducers =combineReducers({
    doctors,
    // student
})
export default allReducers