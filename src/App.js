import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ToDoList from './components/ToDoList/ToDoList';
import LoginPage from './components/Routes/LoginPage'
import SignUpPage from './components/Routes/SignUpPage';
import AdminLoginPage from './components/Routes/AdminLoginPage';
import AdminManager from './components/AdminManager/AdminManager'
import AdminSignUpPage from './components/Routes/AdminSignUpPage';
import Loading from './components/Loader/Loading';

function App() {
  const [isLoading, setLoader] = useState(false)  
  return (
    <>
      <BrowserRouter>
        {
          (isLoading) ? <Loading/> :
        <Routes>
          <Route path={"/"} element={<LoginPage loaderHandler={setLoader}/>}/>
          <Route path={"/personalList"} element={<ToDoList/>}/>
              <Route path={"/spForm"} element={<SignUpPage loaderHandler={setLoader} />}/>
              <Route path={"/adminForm"} element={<AdminLoginPage loaderHandler={setLoader}/>}/>
              <Route path={"/adminManager"} element={<AdminManager loaderHandler={setLoader}/>} />
              <Route path={"/adminSignUp"} element={<AdminSignUpPage loaderHandler={setLoader}/>} />
        </Routes>
        }
      </BrowserRouter>
  
    </>
  );
}

export default App;

