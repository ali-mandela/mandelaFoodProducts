import React from 'react'
import Header from '../../Components/JSX/Header'
import Hero from '../../Components/JSX/Hero';
import WhyUs from '../../Components/JSX/WhyUs';
import Trusted from '../../Components/JSX/Trusted';

const Home = () => {
  return (<>
    <Header/>
    <Hero props={{title:"Mandela Food PRoducts", text:"Welcome to home page of mandela food products", body:"Mandela food products is a start-up based in Ladakh Himalayan range. We provide hygienic and organic food processing services. We love to offer our customer healthy, fresh, tasty and safe products"}}/>
    <WhyUs/>
    <Trusted/>
  </>)
}

export default Home;