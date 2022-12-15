import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import FormWrapper from './login/FormWrapper'
import Footer from './Footer';
import Copyright from './Copyright';
function Login() {
  return (
    <div>
    <Header/>
    <Navbar/>
    <FormWrapper/>
    <Footer/>
    <Copyright/>
    </div>
  );
}

export default Login;
