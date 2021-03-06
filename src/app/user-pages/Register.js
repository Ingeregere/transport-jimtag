import React, {useEffect, useState} from 'react';
import {Alert, Container, Form} from 'react-bootstrap';
import AllServices from "./Service";
import './style.css'
import PaysService from "../vehicules/pays/PaysService";
import {Link, useHistory} from "react-router-dom";

const Index= () => {
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState()
  const [countries, setCountries] = useState([])
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState('')
  const history = useHistory()

  useEffect(()=>{
    getAllCountry()

  },[])
  const getAllCountry = () =>{
    PaysService.getAllCountry().then((response) =>{
      setCountries(response.data)
    })
  }



  const saveUserProfile = (event) =>{
    event.preventDefault();
    const data = {
      address,
      country,
      firstname,
      lastname,
      mobile,
      password,
      email
    }
    AllServices.postUserProfile(data)
        .then(response=>{
          console.log('New annonce is added', response.data)
          setSuccess(response.data.message)
          setError('')
          setAddress('')
          setCountry('')
          setMobile('')
          setFirstName('')
          setLastName('')
          setPassword('')
          setEmail('')


        })
        .catch(error =>{
          console.log('something went wrong', error)
          setError('true')
          setSuccess('')
        })



  }
  const showError = () => (

      <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
        <strong><center>Veiller complète tous les champs
          <span className={'text-center btnX'} onClick={SuccessClose}>X</span>
        </center></strong>

      </Alert>
  )
  const SuccessClose = () =>{
    setSuccess('')
    history.push("/s'inscrirer")
  }
  const showSuccess = () => (

      <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
        <strong> <center>{success} {' '}
          <span className={'text-center btnX'} onClick={SuccessClose}>X</span></center> </strong>
      </Alert>
  )
  return (
      <Container>
        <div className="row  mainLogin">
          <div className={'col-lg-12'} >
            <span>{showError()}</span>
            <span>{showSuccess()}</span>
          </div>
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card mt-3">
              <div className="card-body mainLogine">
                <form className="forms-sample">
                  <Form.Group>
                    <label className={'text-dark text-capitalize'} htmlFor="numberTransport">Nom</label>
                    <Form.Control
                        type="text"
                        className="form-control"
                        id="exampleInputEmail3"
                        placeholder="Nom"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label className={'text-dark text-capitalize'} htmlFor="tonnage">Prénom</label>
                    <Form.Control
                        type="text"
                        className="form-control"
                        id="exampleInputPassword4"
                        placeholder="Prénom"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label className={'text-dark'} htmlFor="dateDelivery">Email</label>
                    <Form.Control
                        type="text"
                        className="form-control"
                        id="exampleInputCity1"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label className={'text-dark text-capitalize'} htmlFor="brand" >Pays</label>
                    <select
                        className="form-control"
                        id="exampleSelectGender"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                      <option defaultValue={'Selectionner la marque'}>Selectionner pays</option>
                      {countries && countries.map((b, index) => (
                          <option key={b.id} value={b.id} >{b.name}</option>
                      ))}

                    </select>
                  </Form.Group>

                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card mt-3">
              <div className="card-body">

                <form className="forms-sample">
                <Form.Group>
                    <label className={'text-dark text-capitalize'} htmlFor="kindProduct">Adresse</label>
                    <Form.Control
                        type="text"
                        className="form-control "
                        id="exampleInputName1"
                        placeholder="Adresse"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <label className={'text-dark text-capitalize'} htmlFor="placeLoading">Télephone</label>
                    <Form.Control
                        type="tel"
                        className="form-control"
                        id="exampleInputPassword4"
                        placeholder="+257 888 888"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label className={'text-dark text-capitalize'} htmlFor="placeDelivery">Password</label>
                    <Form.Control
                        type="password"
                        className="form-control"
                        id="exampleInputPassword4"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                

                  <div className="mt-3">
                    <button
                        type="submit"
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        onClick={(event) => saveUserProfile(event)}
                    >S'inscrire</button>
                  </div>
                  <div className="text-center mt-4 font-weight-bold text-dark">
                    Avez-vous déjà un compte? <Link to="/login" className="text-primary">Se connecter </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </Container>
  )

}

export default Index
