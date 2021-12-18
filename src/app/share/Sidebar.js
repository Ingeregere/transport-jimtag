import React, { Component } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { signout } from '../user-pages/session';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/vehicule', state: 'basicUiMenuOpen'},
      {path:'/vehicule', state: 'basicUiMenuOpen'},
      {path:'/country', state: 'basicUiMenuOpen'},
      {path:'/contact', state: 'basicUiMenuOpen'},
      {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/maps', state: 'mapsMenuOpen'},
      {path:'/Contact', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {

    return (

      <nav className="sidebar sidebar-offcanvas " id="sidebar">
        <ul className="nav position-fixed">
          <li className="nav-item nav-category"><Trans>Espace Client</Trans></li>
          <li className={ this.isPathActive('/') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/">
              <span className="icon-bg"><i className="mdi mdi-cube menu-icon"></i></span>
              <span className="menu-title"><Trans>Page d'accueil</Trans></span>
            </Link>
          </li>
          <li className="nav-item nav-category"><Trans>Tous les menus</Trans></li>
          <li className={ this.isPathActive('/vehicule') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <span className="icon-bg"><i className="mdi mdi-car menu-icon"></i></span>
              <span className="menu-title"><Trans>Transport</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/commande/gérer_commande') ? 'nav-link active' : 'nav-link' } to="/commande/gérer_commande"><Trans>Gérer les marques</Trans></Link></li>
                
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/Contact') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('iconsMenuOpen') } data-toggle="collapse">
              <span className="icon-bg"><i className="mdi mdi-phone menu-icon"></i></span>
              <span className="menu-title"><Trans>Contacter</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.iconsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/user/contacts') ? 'nav-link active' : 'nav-link' } to="/user/contacts"><Trans>Gérer</Trans></Link></li>
              </ul>
            </Collapse>
          </li>

          <li className="nav-item sidebar-user-actions">
            <div className="sidebar-user-menu">
              <Link   className={ this.isPathActive('/') ? 'nav-link active' : 'nav-link' } to="/"><i className="mdi mdi-logout menu-icon"></i>
                <span 
                  type="button"
                  className="btn btn-dark btn-fw "
                  style={{cursor:'pointer',color:'#ffffff'}}
                  onClick={()=>signout(()=>{})}
                className="menu-title"
                ><Trans>Déconnexion</Trans></span></Link>
            </div>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);