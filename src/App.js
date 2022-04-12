import React from 'react'
import Navbar from './components/Navbar';
// import Navbar from './components/Navbar/index'
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import AddUser from './components/AddUser';
import PageNotFound from './components/PageNotFound';
import './App.css';


function App() {
  return (
    <>
      <Navbar/>
      <div className="pageContainer">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Users" element={<Users/>}></Route>
        <Route path="/AddUser" element={<AddUser/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App;
