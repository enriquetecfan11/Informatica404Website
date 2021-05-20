import React, {useState} from 'react';
import 'firebase/auth'
import fire from "../config/fire";
import {useHistory } from "react-router-dom";

 
function Login() {
  
  const firebase = fire;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const singing = async () =>{
    await firebase.auth().createUserWithEmailAndPassword(email,password)

  }

  const login = async () =>{
    await firebase.auth().signInWithEmailAndPassword(email,password)
    .then((u) => {
       console.log("login complete")
       history.push('/dashboard')
    })
      .catch(function (error) {
        console.log(error);
      });
   
  }

  return(
    <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-75">
              <h1>Bienvenido a Informatica 404</h1>
            </div>
            <div className="col-25"><label htmlFor="email">Email:</label></div>
            <div className="col-75">
              <input type="email" id="email" onChange={(ev) => setEmail(ev.target.value)}/>
            </div>
            <div className="col-25"><label htmlFor="password">Password:</label></div>
            <div className="col-75">
              <input type="password" id="password" onChange={(ev) => setPassword(ev.target.value)} />
            </div>
          </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <button onClick={login} class="btn btn-primary">Login</button>
              </div>
               <div className="col-sm">
                
              </div>
              <div className="col-sm">
                <button onClick={singing} class="btn btn-secondary">Registrarse</button>
              </div>
            </div>
          </div>
    </div>
  )
}


export default Login;
