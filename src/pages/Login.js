import React from 'react'

function Login({history}) {
    const home=()=>{
        history.push('/')
    }
    return(
        <button className="btn btn-primary" onClick={()=> home({history})}>Login</button>
    )
}

export default Login;
