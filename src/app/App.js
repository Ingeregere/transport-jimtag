import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './share/Navbar';
import Sidebar from './share/Sidebar';
import Footer from './share/Footer';
import UserSiderBar from "./share/UserSiderBar";
import { withTranslation } from "react-i18next";
import {isAuthenticated} from "./user-pages/session";

class App extends Component {

  state = {}
  componentDidMount() {
    this.onRouteChanged();
  }
  render () {

    let navbarComponent = !this.state.isFullPageLayout ? <Navbar/> : '';
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar/> : '';
    let usersidebarComponent = !this.state.isFullPageLayout ? <UserSiderBar/> : '';
    let footerComponent = !this.state.isFullPageLayout ? <Footer/> : '';
    return (

      <div className="container-scroller">
        { navbarComponent }
        <div className="container-fluid page-body-wrapper">
          { isAuthenticated() && isAuthenticated()[0] === 'admin'? sidebarComponent : usersidebarComponent}
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes/>
            </div>
            { footerComponent }
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    // console.log("ROUTE CHANGED");
    const { i18n } = this.props;
    const body = document.querySelector('body');
    // if(this.props.location.pathname === '/layout/RtlLayout') {
    //   body.classList.add('rtl');
    //   i18n.changeLanguage('ar');
    // }
    // else {
    //   body.classList.remove('rtl')
    //   i18n.changeLanguage('en');
    // }
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = [
      "/admin",
      "/user",
      "/vehicules/marques",
      "/vehicules/categories",
      "/vehicules/modèles",
      "/vehicules/pays",
      "/vehicules/carrosseries",
      "/vehicules/attribuer_vehicules",
      "/vehicules/gérer_vehicules",
      "/vehicules/dropdowns",
      "/vehicules/typography",
      "/image-slide/basic-table",
      "/annonce/gérer_annonces",
      "/annonce/nouvelle_annonces",
      "/commande/gérer_commande",
      "/user/contacts",
      "/contacts/clients",
      "/vehicules/ajouter_marques",
      "/vehicules/ajouter_pays",
      "/vehicules/ajouter_carrosserie",
      "/image-slide/image-publicite",
      "/image-slide/ajouter-publicite",
      "/image-slide/image-slide",
      "/vehicules/ajouter_models",
      "/user-pages/utilisateur",
      "/user-pages/ajouter_user",
      "/user-pages/editer_user",
      "/user-pages/role",
      "/user-pages/ajouter_role",
      "/vehicules/ajouter_category",
      "/image-slide/ajouter-image",
      "/commandes/par-jour",
      "/contacts/recus-par-jour",
      "/vehicules/categories/voir-image/",
        '/vehicules/edit-transport/',
      "/contacts/question",

   ];
    const currentURL = window.location.pathname
    const idEditer = currentURL.slice(18,1000000000)
    const idMarques = currentURL.slice(18,1000000000)
    const idModel = currentURL.slice(17,1000000000)
    const idModelEditer = currentURL.slice(14,1000000000)
    const idpays = currentURL.slice(20,1000000000)
    const idpaysEditer = currentURL.slice(23,1000000000)
    const idcarro = currentURL.slice(27,1000000000)
    const idactivedesactive = currentURL.slice(28,1000000000)
    const idrole = currentURL.slice(24,1000000000)
    const iduserEditer = currentURL.slice(24,1000000000)
    const idcategory = currentURL.slice(27,1000000000)
    const idslide = currentURL.slice(20,1000000000)
    const idarticle = currentURL.slice(22,1000000000)
    const deleteslide = currentURL.slice(23,1000000000)
    const idvoirimageCat = currentURL.slice(33,1000000000)
    const imagetransport = currentURL.slice(26,1000000000)
    const imagetransporte = currentURL.slice(30,1000000000)
    const inserimageTranspo = currentURL.slice(25,1000000000)
    const edittransport = currentURL.slice(26,1000000000)
    const deletetransport = currentURL.slice(31,1000000000)

    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {

      if (
          this.props.location.pathname === fullPageLayoutRoutes[i] ||
          this.props.location.pathname === `/vehicules/editer/${idEditer}` ||
          this.props.location.pathname === `/vehicules/marque/${idMarques}`||
          this.props.location.pathname === `/vehicules/model/${idModel}`||
          this.props.location.pathname === `/vehicules/categories/voir-image/${idvoirimageCat}`||
          this.props.location.pathname === `/vehicules/inserer-image/${inserimageTranspo}`||
          this.props.location.pathname === `/vehicules/category/editer/${idcategory}`||
          this.props.location.pathname === `/model/editer/${idModelEditer}`||
          this.props.location.pathname === `/vehicules/veh_pays/${idpays}`||
          this.props.location.pathname === `/vehicules/veh_carrosserie/${idcarro}`||
          this.props.location.pathname === `/user-pages/editer_role/${idrole}`||
          this.props.location.pathname === `/user-pages/editer_user/${iduserEditer}`||
          this.props.location.pathname === `/vehicules/pays/editer/${idpaysEditer}` ||
          this.props.location.pathname === `/vehicules/ajouter_les_images/${imagetransporte}` ||
          this.props.location.pathname === `/vehicules/ajouter_image2/${imagetransport}` ||
          this.props.location.pathname === `/vehicules/ajouter_image3/${imagetransport}` ||
          this.props.location.pathname === `/vehicules/ajouter_image4/${imagetransport}` ||
          this.props.location.pathname === `/vehicules/ajouter_image5/${imagetransport}` ||
          this.props.location.pathname === `/vehicules/ajouter_image6/${imagetransport}` ||
          this.props.location.pathname === `/vehicules/ajouter_image7/${imagetransport}` ||
          this.props.location.pathname === `/vehicules/ajouter_image8/${imagetransport}` ||
          this.props.location.pathname === `/vehicules/ajouter_image9/${imagetransport}` ||
          this.props.location.pathname === `/vehicules/ajouter_image10/${imagetransport}` ||
          this.props.location.pathname === `/vehicules/active-desactive/${idactivedesactive}` ||
          this.props.location.pathname === `/vehicules/edit-transport/${edittransport}` ||
          this.props.location.pathname === `/vehicules/supprimer_transport/${deletetransport}` ||
          this.props.location.pathname === `/image-slide/editer/${idslide}`||
          this.props.location.pathname === `/image-article/editer/${idarticle}`||
          this.props.location.pathname === `/image-slide/supprimer/${deleteslide}`


      ) {
        this.setState({
          isFullPageLayout: false
        })
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
        break;
      } else {
        this.setState({
          isFullPageLayout: true
        })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
      }
    }
  }

}

export default withTranslation()(withRouter(App));
