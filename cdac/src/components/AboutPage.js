import React from "react";
//import { useNavigate } from "react-router-dom"
import '../css/AboutPage.css'
import C03 from '../assets/Photo06.jpg';

function AboutPage(){

    return (
        <section className="APContainer">
            <div className="APMain">
                <div className="section-title">
                    <h2>About Us</h2>
                </div>
                <div className="section-h6" style={{backgroundColor:"#5cb874"}}>
                </div>
                <p className="section-para">
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>

                <div className="row section-row">
                    <div className="col-md-6">
                        <h3>
                            Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                        </h3>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>
                    <div className="col-md-6">
                            <img src={C03} alt="InstituteImage" className="section-image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AboutPage;