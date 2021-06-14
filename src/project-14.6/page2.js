import React from 'react'
export default function Page2(props) {
//שליפת מערך המשתמשים מהשרת 
    return (

        <>
        {/* צריך לעטוף את הקומפוננטה עם קונקט ולקבל את  המערך users  כפקופס
        שולפים מהרידקס את הuser האחרון  */}
        <h1>page2</h1>
        <p>my-name is:</p>
        <p>my-age is:</p>
        <p>my-city is:</p>
        <p>my-email is:</p>
        <p>my-phone is:</p>
        </>
    )
}