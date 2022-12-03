import React from "react";
import AdminSPForm from "../Forms/AdminSignUpForm/AdminSPForm";
import { Link } from "react-router-dom";


const AdminSignUpPage = ()=>{
    return(
        <>
            <div className='mainContainer'>
                <nav className='mt-4 justify-content-end d-flex'>
                    <div className="m-3">
                        <Link to={'/'}><button type="button" className="btn btn-outline-light">Log In as a User</button></Link>
                    </div>
                    <div className="m-3">
                        <Link to={'/adminForm'}><button type="button" className="btn btn-outline-light">Log In as an Admin</button></Link>
                    </div>
                </nav>
                <div className='formContainer'>
                    <AdminSPForm />
                </div>
            </div>


           
        </>
    )
}

export default AdminSignUpPage;