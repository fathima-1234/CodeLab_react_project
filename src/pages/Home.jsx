import React from "react";
import NavBar from "../components/LandPage/NavBar";
import Carousal from "../components/LandPage/Carousal";
import Frame from "../components/LandPage/Frame";
import Frame1 from "../components/LandPage/Frame1";
import Howwork from "../components/LandPage/Howwork";
import Footer from "../components/LandPage/Footer";
import Question from "../components/LandPage/Question";
import ContactUs from "../components/LandPage/ContactUs";
import LatestBlog from "../components/LandPage/LatestBlog";
import DocotrList from "../components/LandPage/DocotrList";
import Adv from "../components/LandPage/Adv";
import Pickwere from "../components/LandPage/Pickwere";
function Home() {
    return (
        <>
            <NavBar />
            <Carousal />
            <Frame />
            <Frame1 />
            <Howwork />
            <Pickwere />
            <DocotrList />
            <Adv />
            <Pickwere />
            <LatestBlog />
            <ContactUs />
            <Question />
            <Footer />
        </>
    );
}

export default Home;