import React from "react";
import Table from "./Table/Table";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {useState} from "react";

const AdminManager = ()=>{
    const [users, setUsers] = useState([])
    
    let navigate = useNavigate();
    const url = 'http://localhost:8080/adminManager/getUsers'

    const logout = () => {
        navigate('/')
        localStorage.removeItem('adminToken')
    }

    const getUsers = async ()=>{
        await fetch(url, {
            headers: {
                'Authorization': localStorage.getItem('adminToken')
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setUsers(data)
        })
    }

    const deletionURL = 'http://localhost:8080/adminManager/deletion'

    const deleter = async (id) => {
        await fetch(`${deletionURL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': localStorage.getItem('userToken')
            }
        }).then((data) => data.json())
        getUsers();
    }



    useEffect(()=>{
        getUsers()
    },[])

    return(
        <>
            <div className="adminContainer">
                <div className="d-flex justify-content-between mt-4 align-items-center col-10">
                    <h1>Administrator Section</h1>
                    <nav>
                        <button type="button" className="btn btn-danger" onClick={logout}>Log Out</button>
                    </nav>
                </div>
                {
                    users.length > 0 ? <Table usersList={users} deleter={deleter}/> : <h1>No users avaiable</h1>
                }
                
            </div>
           
        </>
    )
}

export default AdminManager;