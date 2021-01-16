import React from 'react'

function Login({history}) {
    const home=()=>{
        history.push('/')
        //window.location.reload();
    }
    return(
        <button className="btn btn-primary" onClick={home}>Login</button>
    )
}

export default Login;
