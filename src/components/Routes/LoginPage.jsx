import React from "react";
import Login from "../Forms/LoginForm/Login";
import { Link } from "react-router-dom";

const LoginPage = ()=>{
    return(
        <div className='mainContainer'>
            <div style={{marginLeft: '2%', marginRight:'2%'}}>
                <nav className='formNav'>
                    <h1 className='userName justify-content-start'>To Do List!</h1>
                   
                </nav>
            </div>
           
            <div className='formContainer'>
                <Login/>
            </div>
        </div>  
    )

}

export default LoginPage;