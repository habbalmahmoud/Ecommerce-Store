import React from "react";
import Header from "../header/Header";
import Slider from "../Slider/Slider";
import Nav from "../Navigation/Nav";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Nav />
            <Banner />
            <Footer />
        </div>
    )
}

export default Home