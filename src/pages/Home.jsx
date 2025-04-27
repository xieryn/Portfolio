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
                
                <button className="btn">Hire Me</button>
            </div>
        </section>
    );
}

export default Home;
