import React from "react";
import { Link } from "react-router-dom";

function Regester (){

    return (

        <div className='auth'>
        <h1>Regester</h1>
        <form>
            <input required type="text" placeholder="username"/>
            <input required type ="email" placeholder="email"/>
            <input required type="text" placeholder="username"/>
            <button>Regester</button>
            <p>Error has Occured</p>
            <span>Have an Account? <Link to= "/login">Regester</Link></span>
        </form>
    </div>
    )
}

export default Regester