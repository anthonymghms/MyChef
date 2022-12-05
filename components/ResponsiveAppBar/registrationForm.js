import React, {useState} from 'react';
import jwt from 'jsonwebtoken';
import {useRouter} from 'next/navigation';
import LandingPage from '../../pages';
import { render } from 'react-dom';
import Router  from 'next/router';

var TOKEN = ''

export function SignUpForm() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }

    }

    const handleSubmit  = () => {
        let obj = {
            firstName : firstName,
            lastName:lastName,
            email:email,
            password:password,
        }       
    console.log(obj);
    }

    return(
        <form className="form" action='/api/register' method='post'>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" name='firstName' type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="lastName" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" name='email' className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" name='password' type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </form>      
    )       
}



export function getToken(){
    return TOKEN
}
export function LogInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [token,setToken] = useState('')
    const router = useRouter();

    const submitForm = async ()=>{
        const res = await fetch('/api/login', {
            method:'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        const token = data['token']
        
        console.log(data)
        if(token){
            const json = jwt.decode(token)
            TOKEN = token
            setToken(token)
            Router.push('/welcome')
        }
        return res
    };
    return(
      <form className="form">
          <div className="form-body">
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input
                    type="email" 
                    className="form__input" 
                    placeholder="Email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
              </div>
          </div>
          <div class="footer">
              <button type="button" class="btn" onClick={submitForm}>Log In</button>
          </div>
      </form>      
    )       
}