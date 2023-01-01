import React from 'react'
import aboutImg from '../img/me.jpg'

function About() {
    return (
        <>
            <section className='section' style={{ paddingTop: '0.1rem' }} id='about'>
                <section className='container about-section about'>
                    <h6 className='heading'>03. <span>Know Me More</span> <div></div></h6>
                    <h2>About Me</h2>

                    <div className='about-details'>
                        <div>
                            <p>Hello! I'm Yubaraj Gaonkhowa, a 24 y/o Front End Developer from Raha, Assam, India. I enjoy coding and creating things. I am currently a Front End Developer but I'm learning backend as well. I love to learn and I plan to keep learning my entire life. Coding is fun, technologies are fun. I have worked using React, JavaScript, Redux, TailwindCSS, Bootstrap, PHP, SQL, HTML5, CSS3, Git, Node + Expres, MongoDB, Firebase. I have built over 15 projects including Frontend and Full Stack projects. I have worked with Youtube API, Unsplash API, Weather API, SQL Database and PHP, Firebase Authentication in Chat App, etc.</p>

                            <p>Till now I have worked in <b style={{ color: "#e0c4ff" }}>a start-up</b> for a limited contract period, after that I have done Freelance until December 2022, then I joined another company in Bengaluru named Unizen Technologies as a Front-End Developer.</p>

                            <h4>Here are the technologies I've been working on <b>recently</b>: </h4>

                            <div style={{ display: "grid", gridTemplateColumns: "50% 50%", margin: "-1rem 2rem 2rem 2rem" }}>
                                <ul>
                                    <li>React</li>
                                    <li>Redux, (redux-thunk)</li>
                                    <li>JavaScript(ES6+)</li>
                                    <li>RestAPI</li>
                                    <li>TailwindCSS</li>
                                    <li>Git</li>
                                </ul>
                                <ul>
                                    <li>Firebase</li>
                                    <li>PHP</li>
                                    <li>SQL</li>
                                </ul>
                            </div>

                        </div>
                        <picture>
                            <img src={aboutImg} alt="" />
                        </picture>
                    </div>
                </section>
            </section>
        </>
    )
}

export default About