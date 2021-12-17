import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {
    _isMounted = false;
    state = {
        infoUser: []
    };

    componentWillUnmount() {
        this._isMounted = false;
    }

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
            {path:'/vehicules', state: 'basicUiMenuOpen'},
            {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
            {path:'/annonce', state: 'formElementsMenuOpen'},
            {path:'/image-slide', state: 'tablesMenuOpen'},
            {path:'/maps', state: 'mapsMenuOpen'},
            {path:'/contacts', state: 'iconsMenuOpen'},
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
            <>
                <nav className="sidebar sidebar-offcanvas" id="sidebar" >
                    <ul className="nav">
                        <li className="nav-item nav-category"><Trans>
                        </Trans></li>
                        <br />
                        <li className={ this.isPathActive('/annonce') ? 'nav-item active' : 'nav-item' }>
                            <div className={ this.state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('formElementsMenuOpen') } data-toggle="collapse">
                                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                                <span className="menu-title"><Trans>Commandes</Trans></span>
                                <i className="menu-arrow"></i>
                            </div>
                            <Collapse in={ this.state.formElementsMenuOpen }>
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <Link className={ this.isPathActive('/commande/gérer_commande') ? 'nav-link active' : 'nav-link' } to="/commande/gérer_commande"><Trans>Gérer les commandes</Trans></Link></li>
                                </ul>
                            </Collapse>
                        </li>
                        <li className={ this.isPathActive('/contacts') ? 'nav-item active' : 'nav-item' }>
                            <div className={ this.state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('iconsMenuOpen') } data-toggle="collapse">
                                <span className="icon-bg"><i className="mdi mdi-contacts menu-icon"></i></span>
                                <span className="menu-title"><Trans>Contact</Trans></span>
                                <i className="menu-arrow"></i>
                            </div>
                            <Collapse in={ this.state.iconsMenuOpen }>
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <Link className={ this.isPathActive('/user/contacts') ? 'nav-link active' : 'nav-link' } to="/user/contacts"><Trans>Contacts véhicule</Trans></Link></li>
                                </ul>
                            </Collapse>
                        </li>

                    </ul>
                </nav>
            </>

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