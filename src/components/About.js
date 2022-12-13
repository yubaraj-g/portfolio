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
                            <p>Hello! I'm Yubaraj Gaonkhowa, a 24 y/o Front End Developer from Raha, Assam, India. I enjoy coding and creating things that either looks good or have a decent purpose. I sometimes create things for fun too (mostly expermental). The reason I like frontend more is because I can create things and it's visually amazing. I tried exporing options and worked in different field for almost 2 years which made me realize that Coding (IT industry) is better than any other industry, from my POV(personal opinion only). Therefore I started coding again from 2022 beginning. I had almost forgot everything I learnt so far and decided to start from basic HTML CSS which made me really good at Front End development. Along with that I started learning UX Designing which taught me about Figma and it made my front end journey more wonderful. But my preference goes to coding more than designing.</p>

                            <p>During this journey I have worked in <b style={{ color: "#e0c4ff" }}>a start-up</b> for a limited contract period, after that I focused on strengthening my skills and started taking small freelance projects only. Since then I've been working on various projects and completed many and still working on more.</p>

                            <h4>Here are the technologies I've been working on recently: </h4>

                            <div style={{display: "grid", gridTemplateColumns: "50% 50%", margin: "-1rem 2rem 2rem 2rem"}}>
                                <ul>
                                    <li>React</li>
                                    <li>JavaScript(ES6+)</li>
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