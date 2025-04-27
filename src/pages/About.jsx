import React from 'react';

function About() {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3 className="text-animation">
                    <span></span>
                </h3>
                <p>
                    I am a college student pursuing a Bachelor of Science in Information Technology.
                    I am passionate about web development, UI/UX design, and building systems that make people's lives easier.
                    My goal is to become a full-stack developer and contribute to innovative projects.
                </p>
                <button className="btn">Read More</button>
            </div>
            <div className="about-img">
                <img src="/pic.jpg" alt="About" />
            </div>
        </section>
    );
}

export default About;
