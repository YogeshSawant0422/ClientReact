import React from "react";
//import { useNavigate } from "react-router-dom";

const Back = {
    backgroundColor:"Black",
    color:"white",
    padding:"20px",
    textAlign:"center"
}

function Footer(){
    return(
        <section className="FooterSection" style={Back}>
            <h1>C-DAC</h1>
            <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
            <p>© Copyright IACSD. All Rights Reserved</p>
            <p>2022</p>
        </section>
    )
}

export default Footer;