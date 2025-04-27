import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="social">
                <a href="mailto:capuno.marianne.dll@gmail.com"><i className='bx bxs-envelope'></i></a>
                <a href="tel:09459723613"><i className='bx bxs-phone' ></i></a>
                <a href="https://web.facebook.com/maribstgrl/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook-circle' ></i></a>
                <a href="https://github.com/xieryn" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github' ></i></a>
            </div>

            <ul className="list">
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/skills">Services</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
            </ul>

            <p className="copyright">
                Marianne Capuno | All Rights Reserved
            </p>
        </footer>
    );
}

export default Footer;
