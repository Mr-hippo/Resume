import {createStore} from "redux";
const store = createStore((state = {

}, action) => {
	switch (action.type) {
		case "SETNAME":
			return Object.assign({}, state, {name: action.name});
			break;
		default:
			return state;
	}
})
export default store;
