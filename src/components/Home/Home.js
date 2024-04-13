 import React, { useState } from "react";
import Slider from "../Slider/Slider";
import Nav from "../Navigation/Nav";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";




const Home = () => {

    return (
        <div>
            <Slider />
            <Nav />
            <Banner />
            <Footer />
        </div>
    )
}

export default Home