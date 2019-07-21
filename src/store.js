import {createStore} from 'redux';
import ADD_TO_LIST from './reducers/Todo';
import DELETE from './reducers/Todo';
const create_redux_store=()=>createStore(ADD_TO_LIST);
create_redux_store=()=>createStore(DELETE);
export default create_redux_store;
