import React, {useEffect} from 'react';
import Banner from "../components/Banner";
import Future from "../components/Future";
import Gallery from "../components/Gallery";
import Products from "../components/Products";
import Hotdeals from "../components/Hotdeals";
import Brands from "../components/Brands";
import Dealofweek from "../components/Dealofweek";



const Home = () => {
	
    useEffect(() =>{
		window.scroll(0,0)
  }, [])
  return (
    <>
	<Banner/>
	<div><Future/></div>
	<div><Gallery/></div>
	<div><Products/></div>
	<div><Hotdeals/></div>
	<div><Brands/></div>
	<div><Dealofweek/></div>
  </>
  )
}

export default Home
