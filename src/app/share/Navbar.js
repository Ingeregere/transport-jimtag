import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { isAuthenticated, signout } from '../user-pages/session';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  render () {
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/"><img src={require("../../assets/images/category/logo.png")} alt="profile" /></Link>
          <Link className="navbar-brand brand-logo-mini" to="/"><img src={require("../../assets/images/category/logo.png")} alt="profile" /></Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="mdi mdi-menu"></span>
          </button>
          
          <ul className="navbar-nav navbar-nav-right">




            <li className="nav-item nav-profile nav-language">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <div className="nav-profile-img">
                  <img src={require("../../assets/images/logodash.png")} alt="profile" />
                    </div>
                    <div className="nav-profile-text">
                      <p className="mb-1 text-black"><Trans>{isAuthenticated()}</Trans></p>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <div className="p-3 text-center bg-primary">
                  </div>
                  <div className="p-2">

                    <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" as={Link} to={'/'}>
                      <span><Trans>Accueil</Trans></span>
                      <i className="mdi mdi-account-child ml-1"></i>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" as={Link} to={'/'}>
                      <span
                       type="button"
                       className="btn btn-primary btn-fw menu-title text-dark"
                       style={{cursor:'pointer',color:'#ffffff'}}
                       onClick={()=>signout(()=>{})}
                      ><Trans>Déconnexion</Trans></span>
                      <i className="mdi mdi-logout ml-1"></i>
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>

          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
