import React from "react";

import Heading from "./Heading";
import SecondPage from "./SecondPage";
import AboutUs from "./AboutUs";
import AboutPage from "./AboutPage";
import Information from "./Information";
import InformationCards from "./InformationCards";
import Footer from "./Footer";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

function Demo() {
    return (
        <React.Fragment>
            <Heading/>
            <SecondPage />
            <AboutUs />
            <AboutPage />
            <Information />
            <InformationCards />
            <Footer /> 
        </React.Fragment>
    )
}

export default Demo;