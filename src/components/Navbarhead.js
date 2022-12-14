import React from 'react';


export default function Navbarhead() {

    return (

        <nav className='header-nav'>
            <a id='logo' href="/">YUBARAJ G.</a>

            <a href="#contact" id='header-btn'>

                <div>
                    <svg width="35" height="35" viewBox="0 0 40 40" fill="#d5d5d5d5" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M31 8H7C6.46957 8 5.96086 8.21071 5.58579 8.58579C5.21071 8.96086 5 9.46957 5 10C5 19.836 11.122 28 19 28C26.878 28 33 19.836 33 10C33 9.46957 32.7893 8.96086 32.4142 8.58579C32.0391 8.21071 31.5304 8 31 8ZM19 24C14.09 24 9.808 18.86 9.102 12H28.898C28.192 18.86 23.91 24 19 24Z" />
                        <path d="M8 29H30C30.5304 29 31.0391 29.2107 31.4142 29.5858C31.7893 29.9609 32 30.4696 32 31C32 31.5304 31.7893 32.0391 31.4142 32.4142C31.0391 32.7893 30.5304 33 30 33H8C7.46957 33 6.96086 32.7893 6.58579 32.4142C6.21071 32.0391 6 31.5304 6 31C6 30.4696 6.21071 29.9609 6.58579 29.5858C6.96086 29.2107 7.46957 29 8 29ZM28.048 21.62L29.152 17.774C29.666 17.922 30.23 18 30.814 18C33.028 18 34.6 16.914 34.6 16C34.6 15.086 33.028 14 30.814 14V10C34.99 10 38.6 12.496 38.6 16C38.6 19.504 34.99 22 30.814 22C29.86 22 28.926 21.87 28.048 21.62Z" />
                    </svg>

                    <span> Let's Talk?</span>
                </div>
            </a>
        </nav>


    )
};
