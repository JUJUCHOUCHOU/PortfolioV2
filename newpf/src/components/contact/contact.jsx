import React from 'react';

function Contact() {
    return (
        <div id="contact" className="contactContainer">
            <h3>Contactez-moi ici...</h3>
            <div className="contactContainer-bloc">
                <div className="contactContainer-item">
                    <i className="fa fa-envelope"></i>
                    <h4>julie16cohen@gmail.com</h4>
                </div>
                <div className="contactContainer-item">
                    <i className="fa-solid fa-phone"></i>
                    <h4>06 01 43 21 69</h4>
                </div>
            </div>
        </div>
    );
}

export default Contact;
