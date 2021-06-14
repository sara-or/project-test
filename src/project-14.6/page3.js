// import React from 'react'
// export default function Page3(props) {

//     return (

//         <>
//         {/* ניסיתי לעשות עם רידקס */}
//        {/* //שולפים מהרידקס את הusrs ומציגים רק את השם והמייל  */}
//         <h1>page3</h1>
//         <h3>the users</h3>
        
        
//         {/* {users.map((item) =>{} */}
//         </>
//     )
// }
// import React from 'react'
// import { connect } from 'react-redux'
// function mapStateToProps(state) {
//     return { users: state.reduceUser.users}
// }
// export default connect(mapStateToProps)(
// function Page3(props) {
//         const { users } = props

       

//         return (
//             <>
//                 <div className="row justify-content-around">
//                     {users.map((item) =>
//                         <div key={item.fullName} className="card text-black text-center bg-white mb-3 col-3" style={{ maxWidth: "16rem" }}>
//                             <div className="card-header bg-primary font-weight-bold">{item.fullname}</div>
//                             <div className="card-body">
//                                 <span>{+item.email} </span><br></br>
                               
//                             </div>
//                         </div>
//                     )}
//                 </div>
//                 <p className="text-center  text-primary font-weight-bold " style={{fontSize: "1.2em"}}>מחיר סופי:{'₪'+sum}</p>
//             </>
//         )
//     })