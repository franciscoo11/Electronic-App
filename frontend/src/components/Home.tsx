import React from 'react';
import BannerHome from './BannerHome';
import ByCategories from './ByCategories';
import Copyright from './Copyright';
import Features from './Features';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import NewArrival from './NewArrival';
import RecommendForYou from './RecommendForYou';
import AddSection from './AdSection';


function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <BannerHome/>
      <Features/>
      <ByCategories/>
      <NewArrival/>
      <AddSection/>
      <RecommendForYou/>
      <Footer/>
      <Copyright/>
    </div>
   
  );
}

export default Home;
