import React, {useState} from 'react';
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./Service";
import './style.css'
import {Link, useHistory} from "react-router-dom";
import {isAuthenticated, authenticate} from "./session";


const Login =() =>{

      const [error, setError] = useState('')
      const [role, setRole] = useState('')
      const [token, setToken] = useState('')
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')
      const history= useHistory()
     const {Localuser}=isAuthenticated()

    const isAuthenticate = (event) =>{
    event.preventDefault();
    const data = { username, password}
        console.log(data)
    AllServices.postAuthenticate(data)
        .then(response=>{
          if(response.data.message === 'username or password is not correct.' || response.data.message === 'no-authorization') {
            setUsername('')
            setPassword('')
            setError('false')
          }else {

            const loginData = response.data.message;
            const authorite = loginData.split('-');
            console.log(Localuser)
              authenticate(authorite,()=>{
                  setRole(authorite[0])
                  setToken(authorite[1])
                  console.log('role of user or admin', Localuser)
              })
            if(authorite[0] == 'admin') {

              history.push('/admin')
            }else if(authorite[0] == 'user'){
              history.push('/')
            }
          }
        })
        .catch(error =>{
          setError('true')
        })
  }
    console.log('role of user or admin',Localuser)

    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Le nom d'utilisateur ou le mot de passe est incorrect</center></strong>
        </Alert>
    )

    return (
      <div>
        <div className="d-flex align-items-center auth px-0 mainLogin">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                    { showError() }
                </div>
                <h4 className="font-weight-dark text-center">Se connect pour continuer.</h4>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                        type="email"
                        placeholder="Entrer votre nom d'utilisateur"
                        size="lg" className="h-auto"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                        type="password"
                        placeholder="Entrer votre Mot de passe"
                        size="lg"
                        className="h-auto"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                    <div className="mt-3">
                        <button
                            type="submit"
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                            onClick={(event) => isAuthenticate(event)}
                        >Se connecter</button>
                    </div>
                    <div className="text-center mt-4 font-weight-bold text-dark">
                        Vous n'avez pas de compte? <Link to="/s'inscrirer" className="text-primary">S'inscrire</Link>
                    </div>

                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )

}

export default Login
