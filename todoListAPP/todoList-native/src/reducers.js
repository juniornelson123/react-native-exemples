import { combineReducers } from 'redux'
import taskReducer from './components/taskReducer'

export default combineReducers({
	todo: taskReducer
})