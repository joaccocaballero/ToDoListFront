import React from "react";
import SignUp from "../Forms/SignUpForm/SignUp";
import { Link } from "react-router-dom";

const SignUpPage = ({loaderHandler})=>{
    return(
        <div className='mainContainer'>
            <nav className='mt-4 justify-content-end d-flex'>
                <div className="m-3">
                    <Link to={'/'}><button type="button" className="btn btn-outline-light">Log In</button></Link>
                </div>
            </nav>                
            <div className='formContainer'>
                <SignUp loaderHandler={loaderHandler} />
            </div>
        </div>
    )
}

export default SignUpPage;