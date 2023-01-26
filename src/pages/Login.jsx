import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="username"/>
            <input type="text" placeholder="username"/>
            <button>Login</button>
            <p>Error has Occured</p>
            <span>Don't have an Account? <Link to= "/regester">Regester</Link></span>
        </form>
    </div>
  )
}

export default Login