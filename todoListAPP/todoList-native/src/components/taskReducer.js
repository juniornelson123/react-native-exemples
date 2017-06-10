const INITIAL_VALUE = { description: '', list: [] }

export default (state = INITIAL_VALUE, action) => {
	switch(action.type){
		case 'GET_LIST':
			return {...state, list: action.payload.data}
		case 'FINISH_TASK':
			return state
		case 'CHANGE_TEXT':
			return {...state, description: action.payload}	
		case 'ADD_TASK':
			return {...state, description: ''}
		default:
			return state
	}

}