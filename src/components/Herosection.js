import React from 'react';

export default function Herosection() {
    return (
        <>
        <section className='section' style={{paddingTop: '0.01rem'}} id='home'>
            <section className='heroSection container home'>
                <div className='textHero1'>
                    <p>Hi, my name is</p>
                    <h2>Yubaraj Gaonkhowa.</h2>
                    <h3>I build things for the web.</h3>
                </div>

                {/* <div className='imageHero'>
                    <div></div>
                </div> */}

                <div>
                    <p>I'm a frontend developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building some new products and ideas as well as learning technologies to keep myself up with the industry.</p>
                </div>

                {/* <div className='textHero2'>
                <p>I am a <h2>Front-End Developer (Web/App, UI/UX)</h2></p>
            </div> */}

                <div className='btnsHero'>
                   <a className='button' href="#works">Check My Works</a>
                   <a className='button' href="#contact">Let's Talk</a>
                </div>
            </section>
        </section>
        </>
    )
}

