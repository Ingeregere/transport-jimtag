import React, {useEffect, useState} from 'react';
import {Alert, Container, Form} from 'react-bootstrap';
import AllServices from "./Services";
import './style.css'
import '../../Client/Component/Product/style.css'
import GoogleMapReact from "google-map-react";
import {Map, Marker} from "google-maps-react";
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";
import {DistanceMatrixService} from "@react-google-maps/api";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const CreateAnnonce = () => {

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [brands, setBrands] = useState([])
  const [countries, setCountries] = useState([])
  const [brand, setBrand] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [kindProduct, setKindProduct] = useState('')
  const [mapKilometer, setMapKilometer] = useState(0)
  const [budgetPlanned, setBudgetPlanned] = useState('')
  const [numberTransport, setNumberTransport] = useState('')
  const [tonnage, setTonnage] = useState('')
  const [countryLoading, setCountryLoading] = useState('')
  const [countryDelivery, setCountryDelivery] = useState('')
  const [placeLoading, setPlaceLoading] = useState('')
  const [placeDelivery, setPlaceDelivery] = useState('')
  const [dateDelivery, setDateDelivery] = useState('')
  const [message, setMessage] = useState('')

  const showError = () => (

      <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
        <strong><center>Tous les champs sont recommandés!</center></strong>
      </Alert>
  )
  const showSuccess = () => (

      <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
        <strong> <center> {success} </center> </strong>
      </Alert>
  )
  const defaultProps = {
    center: {
      lat: -3.382270,
      lng: 29.363580
    },
    zoom: 11
  };


  useEffect(()=>{
    getAllBrands()
    getAllCountries()

  },[])

  const getAllBrands = () =>{
    AllServices.getAllBrand().then((response) =>{
      setBrands(response.data)
      // console.log(response.data)
    })
  }
  const getAllCountries = () =>{
    AllServices.getAllCountry().then((response) =>{
      setCountries(response.data)
    })
  }

  const saveAnnonce = (annonce) =>{
    annonce.preventDefault();
    const newAnnonce = {
      brand,
      email,
      mobile,
      budgetPlanned,
      mapKilometer,
      countryDelivery,
      countryLoading,
      dateDelivery,
      kindProduct,
      message,
      numberTransport,
      placeDelivery,
      placeLoading,
      tonnage
    }
    AllServices.postAnnonces(newAnnonce)
        .then(response=>{
          console.log('New annonce is added', response.data)
          setBrand('')
          setEmail('')
          setNumberTransport('')
          setPlaceDelivery('')
          setPlaceLoading('')
          setDateDelivery('')
          setBudgetPlanned('')
          setMessage('')
          setTonnage('')
          setKindProduct('')
          setCountryLoading('')
          setCountryDelivery()
          setSuccess(response.data.message)
          setError('')
        })

        .catch(error =>{
          console.log('something went wrong', error)
          setError('true')
          setSuccess('')
        })

  }
 const handleSelectLoading = async value => {
    geocodeByAddress(value)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error));
    setPlaceLoading(value)
  }
  const handleSelectDelivery = async value => {
    geocodeByAddress(value)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error));
    setPlaceDelivery(value)
  }

  return (
      <Container>

        <div className="row mainformanonce">
          <div className="col-lg-12">
            {showError()}
            {showSuccess()}

          </div>

          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body cardbodymaincommande">
                <form className="forms-sample">
                  <Form.Group>
                    <label className={'text-dark '} htmlFor="countryLoading" >Pays de chargement</label>
                    <select
                        className="form-control"
                        id="exampleSelectGender"
                        value={countryLoading}
                        onChange={(e) => setCountryLoading(e.target.value)}
                    >
                      <option>selectionner le pays...</option>
                      {countries && countries.map((country, index) => (
                          <option key={country.id} value={country.id}>{country.country}</option>
                      ))}
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <PlacesAutocomplete
                        value={placeLoading}
                        onChange={setPlaceLoading}
                        onSelect={handleSelectLoading}
                    >
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                          <div>
                            <label className={'text-dark '} htmlFor="placeLoading">Lieu de chargement</label>
                            <Form.Control
                                {...getInputProps({
                                  placeholder: 'Rechercher le lieu ...',
                                  className: 'location-search-input',
                                })}
                            />

                            <div className="autocomplete-dropdown-container">
                              {loading && <div>Loading...</div>}
                              {suggestions.map((suggestion,id) => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#000000', cursor: 'pointer',color: '#ffffff' }
                                    : { backgroundColor: '#5ce1e6', cursor: 'pointer',color: '#ffffff' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                          className,
                                          style,
                                        })}
                                        key={id}
                                    >
                                      <span>{suggestion.description}</span>
                                    </div>
                                );
                              })}
                            </div>
                          </div>
                      )}
                    </PlacesAutocomplete>
                    <div style={{ height: '20vh', width: '100%' }}>
                      <GoogleMapReact
                          bootstrapURLKeys={{ key: 'AIzaSyAk9QMxW7LuVReF-JfCdpIUUBg2BjrggJo'}}
                          defaultCenter={defaultProps.center}
                          defaultZoom={defaultProps.zoom}
                      >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                        />
                      </GoogleMapReact>
                    </div>
                  </Form.Group>

                  <Form.Group>
                    <label className={'text-dark '} htmlFor="countryDelivery" >Pays de livraison</label>
                    <select
                        className="form-control"
                        id="exampleSelectGender"
                        value={countryDelivery}
                        onChange={(e) => setCountryDelivery(e.target.value)}
                    >
                      <option>selectionner le pays...</option>
                      {countries && countries.map((country, index) => (
                          <option key={country.id} value={country.id}>{country.country}</option>
                      ))}
                    </select>
                  </Form.Group>

                  <Form.Group>
                    <PlacesAutocomplete
                        value={placeDelivery}
                        onChange={setPlaceDelivery}
                        onSelect={handleSelectDelivery}
                    >
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                          <div>
                            <label className={'text-dark '} htmlFor="placeLoading">Lieu de livraison</label>
                            <Form.Control
                                {...getInputProps({
                                  placeholder: 'Rechercher le lieu ...',
                                  className: 'location-search-input',
                                })}
                            />

                            <div className="autocomplete-dropdown-container">
                              {loading && <div>Loading...</div>}
                              {suggestions.map((suggestion, id) => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#000000', cursor: 'pointer',color: '#ffffff' }
                                    : { backgroundColor: '#5ce1e6', cursor: 'pointer',color: '#ffffff' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                          className,
                                          style,
                                        })}
                                        key={id}
                                    >
                                      <span>{suggestion.description}</span>
                                    </div>
                                );
                              })}
                            </div>
                          </div>
                      )}
                    </PlacesAutocomplete>
                    <div style={{ height: '20vh', width: '100%' }}>
                      <GoogleMapReact
                          bootstrapURLKeys={{ key: 'AIzaSyAk9QMxW7LuVReF-JfCdpIUUBg2BjrggJo'}}
                          defaultCenter={defaultProps.center}
                          defaultZoom={defaultProps.zoom}
                      >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                        />
                      </GoogleMapReact>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <label className={'text-dark '} htmlFor="brand" >Type de camion</label>
                    <select
                        className="form-control"
                        id="exampleSelectGender"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    >
                      <option defaultValue={'Selectionner la marque'}>Selectionner la marque</option>
                      {brands && brands.map((brand, index) => (
                          <option key={brand.id} value={brand.id} >{brand.brand}</option>
                      ))}

                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label className={'text-dark '} htmlFor="numberTransport">Nombre de camions</label>
                    <Form.Control
                        type="number"
                        className="form-control"
                        id="exampleInputEmail3"
                        placeholder="Nombre de camions"
                        value={numberTransport}
                        onChange={(e) => setNumberTransport(e.target.value)}
                    />
                  </Form.Group>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body cardbodymaincommande">

                <form className="forms-sample">
                  <Form.Group>
                    <label className={'text-dark '} htmlFor="tonnage">Tonnage</label>
                    <Form.Control
                        type="number"
                        className="form-control"
                        id="exampleInputPassword4"
                        placeholder="Nombre de Tonnes"
                        value={tonnage}
                        onChange={(e) => setTonnage(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label className={'text-dark '} htmlFor="kindProduct">Type de marchandises</label>
                    <Form.Control
                        type="text"
                        className="form-control "
                        id="exampleInputName1"
                        placeholder="Type de marchandises"
                        value={kindProduct}
                        onChange={(e) => setKindProduct(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label className={'text-dark'} htmlFor="message">Informations diverses</label>
                    <textarea
                        className="form-control"
                        id="exampleTextarea1"
                        rows="4"
                        value={message}
                        placeholder={'Entrez votre message'}
                        onChange={(e) => setMessage(e.target.value)}
                    >Inforamtions diverses</textarea>
                  </Form.Group>
                  <Form.Group>
                    <label className={'text-dark '} htmlFor="dateDelivery">Date de livraison</label>
                    <Form.Control
                        type="date"
                        className="form-control"
                        id="exampleInputCity1"
                        placeholder="Date de livraison"
                        value={dateDelivery}
                        onChange={(e) => setDateDelivery(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label className={'text-dark '} htmlFor="numberTransport">Budget prévu</label>
                    <Form.Control
                        type="number"
                        className="form-control"
                        id="exampleInputEmail3"
                        placeholder="Budget prévu"
                        value={budgetPlanned}
                        onChange={(e) => setBudgetPlanned(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label className={'text-dark '} htmlFor="placeLoading">Telephone</label>
                    <Form.Control
                        type="tel"
                        className="form-control"
                        id="exampleInputPassword4"
                        placeholder="Entrer votre numero +257... ."
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label className={'text-dark '} htmlFor="placeLoading">Email</label>
                    <Form.Control
                        type="email"
                        className="form-control"
                        id="exampleInputPassword4"
                        placeholder="Entrer votre email pour en disctuter de plus."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <button
                      type="submit"
                      className="btn btn-primary mr-2 btn-fw"
                      onClick={(annonce) => saveAnnonce(annonce)}
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
  )
}

export default CreateAnnonce
