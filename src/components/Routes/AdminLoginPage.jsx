import React from "react";
import { Link } from "react-router-dom";
import AdminLoginForm from "../Forms/AdminLogForm/AdminLoginForm";

const AdminLoginPage = ({loaderHandler})=>{
    return(
        <div className="mainContainer">
            <nav className='mt-4 justify-content-end d-flex'>
                <div className="m-3">
                    <Link to={'/'}><button type="button" className="btn btn-outline-light">Log In as a User</button></Link>
                </div>
                <div className="m-3">
                    <Link to={'/adminSignUp'}><button type="button" className="btn btn-outline-light">Sign Up as an Admin</button></Link>
                </div>
            </nav>    

            <div className="formContainer">
                <AdminLoginForm loaderHandler={loaderHandler}/>
            </div>
        </div>
    )
}

export default AdminLoginPage