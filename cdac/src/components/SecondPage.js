import React from 'react'
//import { useNavigate } from "react-router-dom"
import Slide01 from '../assets/Slide2.jpg';
import Slide02 from '../assets/Slide1.jpeg';
import Slide03 from '../assets/Slide03.jpg';

const SecondPage = () => {
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="1000">
                    <img src={Slide01} class="d-block w-100" alt="FirstCollege" height={700} />
                    <div class="carousel-caption d-none d-md-block">
                        <h1 style={{ fontSize: "30px", fontFamily: "Raleway, sans-serif", fontWeight: "700" }}>Welcome To CDAC</h1>
                        <p style={{ fontSize: "20px", fontFamily: "Raleway, sans-serif", fontWeight: "400" }}>Some representative placeholder content for IACSD</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                    <img src={Slide02} class="d-block w-100" alt="SecondCollage" height={700} />
                    <div class="carousel-caption d-none d-md-block">
                        <h1 style={{ fontSize: "30px", fontFamily: "Raleway, sans-serif", fontWeight: "700" }}>Welcome To CDAC</h1>
                        <p style={{ fontSize: "20px", fontFamily: "Raleway, sans-serif", fontWeight: "400" }}>Some representative placeholder content for IACSD</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Slide03} class="d-block w-100" alt="ThirdCollage" height={700} />
                    <div class="carousel-caption d-none d-md-block">
                        <h1 style={{ fontSize: "30px", fontFamily: "Raleway, sans-serif", fontWeight: "700" }}>Welcome To CDAC</h1>
                        <p style={{ fontSize: "20px", fontFamily: "Raleway, sans-serif", fontWeight: "400" }}>Some representative placeholder content for IACSD</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default SecondPage