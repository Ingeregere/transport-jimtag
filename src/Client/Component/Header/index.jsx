import React from 'react';
import './style.css'
import { Form, FormControl, Nav, Navbar} from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";
import {Link,useHistory} from "react-router-dom";
import {isAuthenticated, signout} from "../../../app/user-pages/session";

const NavbarHeader = () => {
    const history = useHistory()
    return (
        <Navbar expand="lg" className={'navbarMain'}  fixed="top" >

            <Navbar.Brand as={Link} to={'/'} >
                <img
                    src="/logo.png"
                    width="100"
                    height="40"
                    className="d-inline-block align-top logo"
                    alt="Jim tag logo"
                /> {" "}

            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-auto ml-5 my-2 my-lg-0 ">
                    <Form className="d-flex mr-3">
                        <FormControl
                            type="search"
                            placeholder="Saisissez votre recherche"
                            className="mr-2 formSearch"
                            aria-label="Search"
                        />
                    </Form>
                    <NavLink as={Link} to={'/commande-camion'}>
                        <button type="button" className="btn btn-dark btn-fw ">
                            <span className="icon-bg iconBtn"><i className="mdi mdi-truck-delivery"></i></span>
                            Louer un camion
                        </button>
                    </NavLink>
            
                    {isAuthenticated() &&(
                        <NavLink as={Link} to={'/commande/gérer_commande'}>
                            <button type="button" className="btn btn-dark btn-fw ">
                                <span className="icon-bg iconBtn"><i className="mdi mdi-account-circle"></i></span>
                                Mon espace
                            </button>
                        </NavLink>
                    )}


                    {isAuthenticated() &&(
                        <NavLink as={Link} to={'/'}>
                            <button
                                type="button"
                                className="btn btn-dark btn-fw "
                                style={{cursor:'pointer',color:'#ffffff'}}
                                onClick={()=>signout(()=>{
                                    history.push('/')
                                })}
                            >
                                <span className="icon-bg iconBtn"><i className="mdi mdi-account-key"></i></span>
                                Déconnecter
                            </button>
                        </NavLink>
                    )}
                    {!isAuthenticated() &&(
                        <NavLink as={Link} to={'/login'}>
                            <button type="button" className="btn btn-dark btn-fw ">
                                <span className="icon-bg iconBtn"><i className="mdi mdi-account-key"></i></span>
                                Se connecter
                            </button>
                        </NavLink>
                    )}






                </Nav>

            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavbarHeader;