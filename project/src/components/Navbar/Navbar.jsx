import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FiSearch } from "react-icons/fi/index.esm";


import 'bootstrap/dist/css/bootstrap.min.css';

function navbar() {
  return (
    <>    
         <Navbar collapseOnSelect expand="lg"  variant="dark" >
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

       
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link " href="#features">صفحه اصلی</Link>
            <Link className="nav-link " href="#pricing">مادرانه</Link>
            <Link className="nav-link " href="#pricing">نوزاد</Link>
            <Link className="nav-link " href="#pricing">کودک</Link>
            <Link className="nav-link " href="#pricing">نوجوان</Link>
            <NavDropdown title="معلم" id="collasible-nav-dropdown">
              <Link className="dropdown-item" href="#action/3.1">رشد</Link>
              <Link className="dropdown-item" href="#action/3.2">
                آموزش
              </Link>
              <Link className="dropdown-item" href="#action/3.3">تربیت</Link>
              
             
            </NavDropdown>
          </Nav>
          <Nav>
            <Link className="nav-link "  href="#deets">موسسه المهدی</Link>
            <Link className="nav-link "  href="#memes">شبکه شهاب</Link>
            <NavDropdown title="چند رسانه ای" id="collasible-nav-dropdown">
              <Link className="dropdown-item" href="#action/3.1">فیلم</Link>
              <Link className="dropdown-item" href="#action/3.2">
               سریال
              </Link>
           
            </NavDropdown>
            <Link className="nav-link " href="#contact-us">ارتباط با ما</Link>

          </Nav>
         
        </Navbar.Collapse>
        
        <InputGroup className="serach-box">
       
        <Form.Control placeholder="جست و جو ..."
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
         <Button variant="outline-secondary" id="button-addon1">
          <FiSearch/>
        </Button>
      </InputGroup>
      </Container>
    </Navbar>


    
      {/* <Link to="/home">Home </Link>

      <Link to="/about">About Us </Link>

      <Link to="/Banner">Banner</Link> */}
    </>
  );
}



export default navbar;
