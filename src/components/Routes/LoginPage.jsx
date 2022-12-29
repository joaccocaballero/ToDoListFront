import React from "react";
import Login from "../Forms/LoginForm/Login";


const LoginPage = ({loaderHandler})=>{
    return(
        <div className='mainContainer'>
            <div style={{marginLeft: '2%', marginRight:'2%'}}>
                <nav className='formNav'>
                    <h1 className='userName justify-content-start'>To Do List!</h1>  
                </nav>
            </div>
           
            <div className='formContainer'>
                <Login loaderHandler={loaderHandler}/>
            </div>
        </div>  
    )

}

export default LoginPage;