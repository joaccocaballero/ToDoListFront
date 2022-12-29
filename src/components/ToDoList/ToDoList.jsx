import React from "react";
import Title from "./Title/Title"
import Form from "./Form/Form"
import List from "./List/List"
import { useState , useEffect} from "react";
import {useNavigate} from "react-router-dom";

const ToDoList = ()=>{
    const [list, setList] = useState([])
    const [toEdit, setEdit] = useState()
    let navigate = useNavigate();

    const addToList = ((task) => {
        fetch(process.env.REACT_APP_API_URL+'/tasks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('userToken')
            },
            body: JSON.stringify(task),
        })
        .then((data) => {
            getTasks()
        })
    })

    const deleteItem = async (id) => {
        await fetch(process.env.REACT_APP_API_URL+`/tasks/${id}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': localStorage.getItem('userToken')
            }
        }).then((data) => data.json())
        getTasks();
    }

    const editItem = (id) => {
        setEdit(list.find((task) => task.id === id))
        deleteItem(id)
    }

    const deleteAll = () => {
        list.forEach((task) => {
            deleteItem(task.id)
        })
    }

    const logout = () => {
        navigate('/')
        localStorage.removeItem('userToken')
        localStorage.removeItem('userNames')
    }

    const getTasks = async () => {
        await fetch(process.env.REACT_APP_API_URL+'/tasks', {
            headers: {
                'Authorization': localStorage.getItem('userToken')
            }
        })
        .then(response => response.json())
        .then(data => {
            setList(data)
        })
    }

    useEffect(() => {
        getTasks()
    }, [])

    return(
        <div className='mainContainer'>
            <nav className='loggedNav'>
                <h1 className='userName'>{localStorage.getItem('userNames')}</h1>
                <button type="button" className="btn btn-danger" onClick={logout}>Log Out</button>
            </nav>
            <div className="centerSection">
                <div className='d-flex flex-column justify-content-center listContainer gap-3'>
                    <Title
                        text="TaskList"
                    />
                    <Form eventButton={addToList}
                        toEdit={toEdit}
                        deleteTask={deleteItem}
                        listOfItems={list} />

                    <List renderList={list}
                        deleteTask={deleteItem}
                        editTask={editItem}
                    />
                    {
                        list.length === 0 && <span>You do not have pending tasks!</span>
                    }
                    {
                        list.length > 0 && <button type="button" className="btn btn-outline-light" onClick={deleteAll}>Delete All!</button>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default ToDoList;