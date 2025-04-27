import React from 'react';

function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me</span></h2>
            <form action="#">
                <div className="input-box">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="example@gmail.com" required />
                </div>

                <div className="input-box">
                    <input type="text" placeholder="09XXXXXXXXX" />
                    <input type="text" placeholder="The subject of concern" />
                </div>

                <textarea cols="30" rows="10" placeholder="Your Concern" required></textarea>

                <input type="submit" value="Send Message" className="btn" />
            </form>
        </section>
    );
}

export default Contact;
