import { combineReducers } from "redux";
import users from './docUsers'
// import student from './student'
const allReducers =combineReducers({
    users,
    // student
})
export default allReducers