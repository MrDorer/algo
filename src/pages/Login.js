
import React from 'react'
import FacebookLogin from "reac-facebook-login"


function Login() {
  return (
    <>
    <div className="container"></div>



    <FacebookLogin 
    appId="1076873379969057"
    autoLoad={false}
    fields="name,email"
/>

<div className="container"></div>

    <FacebookLogin 
    appId="1076873379969057"
    autoLoad={false}
    fields="name,email"
/>
</>


  )
}

export default Login
