import axios from 'axios'
import consts from '../config/consts'
import { Actions } from 'react-native-router-flux'

export function getList(){
	var request = axios.get(`${consts.URL}todos`)
	return {
		type: 'GET_LIST',
		payload: request
	}
}

export function taskDone(task){
	if (task.done) {
		return dispatch => {
			dispatch(taskFinish(task.id, false))
		}
	}else{
		return dispatch => {
			dispatch(taskFinish(task.id, true))
		}

	}
}

export function removeTask(task){
	return dispatch => {
		axios.delete(`${consts.URL}todos/${task.id}`)
			.then(resp => { dispatch(getList()) })
			.catch(error => { dispatch(alert('Falha ao deletar')) })
	}
}

export function addTask(task){
	return dispatch => {
		axios.post(`${consts.URL}todos/`, {todo: {description: task}})
			.then(resp => { dispatch(getList()) })
			.then(resp => { alert('Tarefa cadastrada') })
			.then(resp => { dispatch({type: 'ADD_TASK'}) })
			.catch(error => { dispatch(alert('Falha ao cadastrar tarefa'))})
	}
}

export function changeText(text){
	return{
		type: 'CHANGE_TEXT',
		payload: text
	}
}

function taskFinish(id, value){
	return dispatch => {
		axios.put(`${consts.URL}todos/${id}`, {todo: {done: value}})
	 		.then(resp => { dispatch(getList()) })
	 		.then(resp => { dispatch({ type: 'FINISH_TASK'}) })
	     	.catch(error => {
	 			dispatch(alert('Falha ao atualizar tarefa'))
	 		});
	}
}	
