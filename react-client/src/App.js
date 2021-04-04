import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
//
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
//
import List from './components/List';
import EditUser from './components/EditUser';
import EditArticle from './components/EditArticle';

import CreateUser from './components/CreateUser';
import ShowUser from './components/ShowUser';
import ShowArticle from './components/ShowArticle';

import Home from './components/Home';
import Login from './components/LoginStudent';
import ShowCourse from './components/ShowCourse';
import EditCourse from './components/EditCourse';
import CreateStudent from './components/CreateStudent';
import ListStudents from './components/ListStudents';
import CreateCourse from './components/CreateCourse';
import ShowStudent from './components/ShowStudent';
import EditStudent from './components/EditStudent';
//
function App() {

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>

            <Nav.Link href="/createStudent">Sign Up</Nav.Link>
            <Nav.Link href="/addCourse">Add course</Nav.Link>
            <Nav.Link href="/listStudents">List of Students</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
      <div>        
          <Route render ={()=> < Home />} path="/home" />
          <Route render ={()=> < Login />} path="/login" />
          <Route render ={()=> < List />} path="/list" />
          <Route render ={()=> < EditUser />} path="/edit/:id" />
          <Route render ={()=> < CreateUser />} path="/create" />
          <Route render ={()=> < ShowUser />} path="/show/:id" />
          <Route render ={()=> < ShowArticle />} path="/showarticle/:id" />
          <Route render ={()=> < EditArticle />} path="/editarticle/:id" />

          <Route render ={()=> < CreateStudent />} path="/createStudent" />
          <Route render ={()=> < ShowStudent />} path="showStudent/:id" />
          <Route render ={()=> < EditStudent />} path="/editStudent/:id" />
          <Route render ={()=> < ListStudents />} path="/listStudents" />
          <Route render ={()=> < CreateCourse />} path="/addCourse/:id" />
          <Route render ={()=> < ShowCourse />} path="/showcourse/:id" />
          <Route render ={()=> < EditCourse />} path="/editcourse/:id" />

      </div>

    </Router>


  );
}
//<Route render ={()=> < App />} path="/" />
export default App;
