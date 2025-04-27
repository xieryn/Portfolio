import React from 'react';

function Home() {
    return (
        <section className="home" id="home">
            <div className="home-img">
                <img src="/pic.jpg" alt="Profile" />
            </div>

            <div className="home-content">
                <h1>It's <span>Marianne</span></h1>
                <h3 className="text-animation">
                    I'm a <span></span>
                </h3>
                <p>
                    Aspiring IT Professional passionate about Web Development, Networking, and AI.
                    <br /> Let's build something together!
                </p>

                <div className="social-icons">
                    <a href="mailto:capuno.marianne.dll@gmail.com"><i className='bx bxs-envelope'></i></a>
                    <a href="tel:09459723613"><i className='bx bxs-phone'></i></a>
                    <a href="https://web.facebook.com/maribstgrl/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook-circle'></i></a>
                    <a href="https://github.com/xieryn" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                </div>

                <button className="btn">Hire Me</button>
            </div>
        </section>
    );
}

export default Home;
