import React, {useEffect, useState} from 'react';
import {Alert, Container, Form} from 'react-bootstrap';
import AllServices from "./Services";
import './style.css'
import '../../Client/Component/Product/style.css'

const CreateAnnonce = () => {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [brands, setBrands] = useState([])
  const [countries, setCountries] = useState([])
  const [brand, setBrand] = useState('')
  const [email, setEmail] = useState('')
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
                    <label className={'text-dark '} htmlFor="placeLoading">Lieu de destination</label>
                    <Form.Control
                        type="text"
                        className="form-control"
                        id="exampleInputPassword4"
                        placeholder="Lieu de destination"
                        value={placeLoading}
                        onChange={(e) => setPlaceLoading(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label className={'text-dark '} htmlFor="placeDelivery">Lieu de livraison</label>
                    <Form.Control
                        type="text"
                        className="form-control"
                        id="exampleInputPassword4"
                        placeholder="lieu de livraison"
                        value={placeDelivery}
                        onChange={(e) => setPlaceDelivery(e.target.value)}
                    />
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
                    <label className={'text-dark '} htmlFor="numberTransport">Nombre de transport</label>
                    <Form.Control
                        type="number"
                        className="form-control"
                        id="exampleInputEmail3"
                        placeholder="Nombre de transport"
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
                    <label className={'text-dark  '} htmlFor="message">Inforamtion diverses</label>
                    <textarea
                        className="form-control"
                        id="exampleTextarea1"
                        rows="4"
                        value={message}
                        placeholder={'Entrez votre message'}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
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
