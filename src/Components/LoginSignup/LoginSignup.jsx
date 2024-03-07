import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up")

  const [loginData, setloginData] = useState('');
  const handleloginChange = (event) => {
    setloginData(event.target.value);
  };
  const [emailData, setEmailData] = useState('');
  const HandleEmailChange = (event) => {
    setEmailData(event.target.value);
  };
  const [passwordData, setpasswordData] = useState('');
  const HandlePasswordChange = (event) => {
    setpasswordData(event.target.value);
  };

  const submitForm = () => {
    // Wyślij dane na backend za pomocą metody POST
    fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({ login: loginData, email: emailData, password: passwordData}),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Odpowiedź z serwera:', data);
        alert('Dane zostały pomyślnie przesłane na serwer!');
      })
      .catch(error => {
        console.error('Błąd podczas wysyłania danych:', error);
        alert('Wystąpił błąd podczas przesyłania danych.');
      });

  };
    
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' value={loginData} onChange={handleloginChange}/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email' value={emailData} onChange={HandleEmailChange} />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' value={passwordData} onChange={HandlePasswordChange}/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">forgot password?<span> click here!</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        <div className="submitbutton"><button type="button" onClick={submitForm}>Submit</button></div>
        
    </div>
  )
}
