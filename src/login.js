import React, { useState } from 'react'
import './login.css'
import {Link, useHistory} from "react-router-dom";
import { Button } from '@material-ui/core';
import { auth } from './firebase';

function _login() {
const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = e =>{


        e.preventDefault();

        //firebase login stuff here 

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {

                history.push('/')
            })        
            .catch(error => alert(error.message))
    }
    const register = e =>{


        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{

            console.log(auth);
            if(auth){

                history.push('/'); 
            }

        })

        .catch(error => alert(error.message))

        //firebase login stuff here 
    }
    return (
        <div className="login">
           
            <Link to='/'>
                <img
                        className="login_logo"
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    />
            
    </Link>
    <div className='login_container'>

        <h1>Sign-In</h1>
        <form>
        <h5>Email</h5>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
        <h5>Password</h5>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
        
        <button onClick={signin}     className='login_signInButton'>Sign-In</button>
        

            

        </form>
        
        <p>
                    By signing-in you agree to the AMAZON CLONE(MadeBYSHIVANSH) Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                
        </p>
        <button className="login_registerButton" onClick={register}>Create Your Amazon Account</button>
    </div>
        </div>
    )
}

export default _login 

