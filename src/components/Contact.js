import React from 'react'

function Contact() {
    return (
        <>
            <section className='section' style={{ paddingTop: '0.01rem' }} id='contact'>
                <section className='container contact-section contact'>
                    <h6 className='heading'>04. <span>What're you waiting for? Contact me.</span> <div></div></h6>
                    <h2>Get In Touch</h2>

                    <div>
                        <p>I'm actively seeking for any good opportunity right now. My inbox is always open, whether there's an opportunity or project or any question, go ahead and write to me or give it a ring.</p>
                    </div>

                    <div>
                        <a href='mailto:yuvrajwebdev@gmail.com'>yuvrajwebdev@gmail.com <div></div></a>
                        <a href='tel:+918721894413'>+91-8721894413 <div></div></a>
                    </div>
                </section>

                <div className='footer'>
                    <span>Designed & Built by Yubaraj Gaonkhowa</span>
                </div>
            </section>
        </>
    )
}

export default Contact