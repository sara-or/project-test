import produce from 'immer'
import createReducer from './utilReduce'
const initialState = {
  
        users: []
}
const user = {
       sendUser(state, action) {
            console.log("addUser")
         
                state.users.push(action.payload);
        }}
export default produce((state, action) => createReducer(state, action,user), initialState)


