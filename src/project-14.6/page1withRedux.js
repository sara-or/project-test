import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actions } from './redux/actions';
function mapStateToProps(state) {
    return {user:state.reduceUser.users};
}
const mapDispatcToProps = (dispatch) => ({
    sendUser:(user)=> dispatch(actions.sendUser(user)),
    
   
})
export default connect(mapStateToProps, mapDispatcToProps)(function Try(props) {
   const { user,sendUser} = props;
  
   
    return (

        <>
        <h1>page1</h1>
        <div>
         
          
        <label>full_name</label><input value={user.fullName}
        ></input>
        <label>age</label><input value={user.age}
        ></input>
        <label>city</label><input value={user.city}
        ></input>
        <label>email</label><input
        //  value={user.email}
       ></input>
        <label>phone</label><input value={user.phone}
       ></input>
        </div>
        <button
             onClick={() => sendUser(user)}
 
          >sendDeatails
                        </button>
        </>
    )
})