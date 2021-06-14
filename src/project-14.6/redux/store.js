import { combineReducers, createStore} from 'redux';
import reduceUser from './reduceUser'
const reducer = combineReducers({reduceUser})

const store = createStore(reducer);
window.store = store;
export default store;