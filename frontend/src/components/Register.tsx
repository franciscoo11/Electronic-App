import React from 'react';
import Copyright from './Copyright';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import FormWrapperRegister from './register/FormWrapperRegister';
function Register() {
  return (
    <div>
    <Header/>
    <Navbar/>
    <FormWrapperRegister/>
    <Footer/>
    <Copyright/>
    </div>

  );
}

export default Register;
