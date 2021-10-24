import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from './share/Spinner';
import AdminRoute from "./SecuriteRoute/AdminRoute";
import PrivateRoute from "./SecuriteRoute/PrivateRoute";
import UserRoute from "./SecuriteRoute/UserRoute";

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const UserDashboard = lazy(() => import('./dashboard/UserDashboard'));

const GererVehicule = lazy(() => import('./vehicules/gérer_vehicules'));
const SearchTransport = lazy(()=>import('../Client/Pages/Search'))
const Marque = lazy(() => import('./vehicules/marques'));
const UpdateMarque = lazy(() => import('./vehicules/marques/UpdateMarque'));
const AddBrand = lazy(() => import('./vehicules/marques/Add'));
const UpdateModel = lazy(() => import('./vehicules/modèles/UpdateModel'));
const AddModel = lazy(() => import('./vehicules/modèles/Add'));
const Model = lazy(() => import('./vehicules/modèles'));
const Category = lazy(() => import('./vehicules/categories'));
const VoirImageCategory = lazy(() => import('./vehicules/categories/PageImage'));
const Country = lazy(() => import('./vehicules/pays'));
const AddCountry = lazy(() => import('./vehicules/pays/Add'));
const UpdateCountry = lazy(() => import('./vehicules/pays/UpdatePays'));
const BodyWork = lazy(() => import('./vehicules/carrosseries'));
const AddBodywork = lazy(() => import('./vehicules/carrosseries/Add'));
const UpdateBodywork = lazy(() => import('./vehicules/carrosseries/UpdateCarrosserie'));
const Attribuer_vehicule = lazy(() => import('./vehicules/attribuer_vehicule'));
const UpdateVehicule = lazy(() => import('./vehicules/gérer_vehicules/UpdateVehicules'));
const AjouterImageTransport = lazy(() => import('./vehicules/gérer_vehicules/ImageTransport'));
const EnableAndDesable = lazy(() => import('./vehicules/gérer_vehicules/EnableDesable'));
const HomePage = lazy(()=>import('../Client/Pages/Home'))
const Tracteur = lazy(()=>import('../Client/Pages/Tracteur'))
const Porteur = lazy(()=>import('../Client/Pages/Porteur'))
const Semis = lazy(()=>import('../Client/Pages/Semis'))
const Divers = lazy(()=>import('../Client/Pages/Divers'))
const Pieces = lazy(()=>import('../Client/Pages/Pieces'))
const Detail = lazy(()=>import('../Client/Pages/Detail'))
const Contact = lazy(()=>import('../Client/Component/Modal'))
const DeposerAnnnonce = lazy(() => import('../Client/Pages/DeposerAnnonce'));
const GererAnnonce = lazy(() => import('./annonce/Annonce'));
const CommandePerDay = lazy(() => import('./dashboard/Commande-Per-Day'));
const ImageSlide = lazy(() => import('./image-slide'));
const UpdateImageSlide = lazy(() => import('./image-slide/UpdateImageSlide'));
const ImageArticle = lazy(() => import('./image-slide/ImageArticle'));
const AddArticle = lazy(() => import('./image-slide/AddArticle'));
const ContactUser = lazy(() => import('./contacts/contact-user'));
const ContactPerDay = lazy(() => import('./dashboard/ContactDay'));
const ContactFQA = lazy(() => import('./contacts/contact-question'));
const ContactCustomer = lazy(() => import('../Client/Pages/Contact'));
const Error404 = lazy(() => import('./error-pages/Error404'));
const AllUser = lazy(() => import('./user-pages/AllUser'));
const Login = lazy(() => import('../Client/Pages/Login'));
const AddUser = lazy(() => import('./user-pages/Add'));
const AddSlide = lazy(() => import('./image-slide/AddSlide'));
const UpdateUser = lazy(() => import('./user-pages/UpdateUser'));
const UpdateCategory = lazy(() => import('./vehicules/categories/UpdateCategorie'));
const AddCategory = lazy(() => import('./vehicules/categories/Add'));
const Role = lazy(() => import('./Role'));
const AddRole= lazy(() => import('./Role/Add'));
const UpdateRole = lazy(() => import('./Role/UpdateRole'));
const Register = lazy(() => import('../Client/Pages/Registre'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <AdminRoute exact path="/admin" component={ Dashboard } />
          <PrivateRoute exact path="/user" component={ UserDashboard } />
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/recherche/:brand/:country/:box" component={ SearchTransport } />
          <AdminRoute exact path="/vehicules/category/editer/:id" component={ UpdateCategory } />
          <AdminRoute exact path="/vehicules/ajouter_category" component={ AddCategory } />
          <AdminRoute exact path="/image-slide/ajouter-image" component={ AddSlide } />
          <AdminRoute exact path="/vehicules/categories/voir-image/:id" component={ VoirImageCategory } />
          <Route exact path="/tracteurs" component={ Tracteur } />
          <Route exact path="/bennes" component={ Porteur } />
          <Route exact path="/semis" component={ Semis } />
          <Route exact path="/pièces et divers" component={ Divers } />
          <Route exact path="/pelles" component={ Pieces } />
          <PrivateRoute exact path={'/detail/:id'} component={ Detail } />
          <Route exact path={'/contact'} component={ Contact } />
          <Route exact path={'/nous-contact'} component={ ContactCustomer } />
          <AdminRoute path="/vehicules/marques" component={ Marque } />
          <AdminRoute path="/vehicules/ajouter_marques" component={ AddBrand } />
          <AdminRoute path="/vehicules/ajouter_carrosserie" component={ AddBodywork } />
          <AdminRoute path="/vehicules/veh_carrosserie/:id" component={ UpdateBodywork } />
          <AdminRoute path="/vehicules/edit-transport/:id" component={ UpdateVehicule } />
          <AdminRoute path="/vehicules/marque/:id" component={UpdateMarque} />
          <AdminRoute path="/vehicules/editer/:id" component={Marque} />
          <AdminRoute path="/vehicules/categories" component={ Category } />
          <AdminRoute path="/vehicules/category/editer/:id" component={ UpdateCategory } />
          <AdminRoute path="/vehicules/modèles" component={ Model } />
          <AdminRoute path="/vehicules/ajouter_models" component={ AddModel } />
          <AdminRoute path="/vehicules/model/:id" component={UpdateModel} />
          <AdminRoute path="/model/editer/:id" component={ Model } />
          <AdminRoute path="/vehicules/veh_pays/:id" component={ UpdateCountry } />
          <AdminRoute path="/vehicules/ajouter_pays" component={ AddCountry } />
          <AdminRoute path="/vehicules/pays/editer:id" component={ Country } />
          <AdminRoute path="/vehicules/pays" component={ Country } />
          <AdminRoute path="/vehicules/carrosseries" component={ BodyWork } />
          <AdminRoute path="/vehicules/attribuer_vehicules" component={ Attribuer_vehicule } />
          <AdminRoute path="/vehicules/gérer_vehicules" component={ GererVehicule } />
          <AdminRoute path="/vehicules/ajouter_image/:id" component={ AjouterImageTransport } />
          <AdminRoute path="/vehicules/active-desactive/:id" component={ EnableAndDesable } />
          <AdminRoute path="/contacts/question" component={ ContactFQA } />
          <AdminRoute path="/image-slide/image-slide" component={ ImageSlide } />
          <AdminRoute path="/image-slide/editer/:id" component={ UpdateImageSlide } />
          <AdminRoute path="/image-slide/image-publicite" component={ ImageArticle } />
          <AdminRoute path="/image-slide/ajouter-publicite" component={ AddArticle } />
          <AdminRoute path="/annonce/gérer_annonces" component={ GererAnnonce } />
          <UserRoute path="/commande/gérer_commande" component={ GererAnnonce } />
          <AdminRoute path="/commandes/par-jour" component={ CommandePerDay } />
          <AdminRoute path="/annonce/nouvelle_annonces" component={ DeposerAnnnonce } />
          <PrivateRoute path="/commande-camion" component={ DeposerAnnnonce } />
          <AdminRoute path="/contacts/clients" component={ ContactUser } />
          <UserRoute path="/user/contacts" component={ ContactUser } />
          <AdminRoute path="/contacts/recus-par-jour" component={ ContactPerDay } />
          <AdminRoute path="/user-pages/utilisateur" component={ AllUser } />
          <AdminRoute path="/user-pages/ajouter_user" component={ AddUser } />
          <AdminRoute path="/user-pages/edit_user/:id" component={ AddUser } />
          <Route path="/login" component={ Login } />
          <AdminRoute path="/user-pages/role" component={ Role } />
          <AdminRoute path="/user-pages/editer_role/:id" component={ UpdateRole } />
          <AdminRoute path="/user-pages/editer_user/:id" component={ UpdateUser } />
          <AdminRoute path="/user-pages/ajouter_role" component={AddRole } />
          <Route path="/s'inscrirer" component={ Register } />
          <Route exact path="*" component={ Error404 } />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;