import { React } from 'react';
import useScrollPosition from '../hooks/useScrollPosition';

export default function Navbarleft() {

  // const sections = document.querySelectorAll('section');
  // const navLi = document.querySelectorAll('.left-nav nav ul li a');

  // window.addEventListener('scroll', () => {
  //   let currentSection = '';
  //   let pageTop = '';

  //   sections.forEach((sec) => {
  //     const sectionTop = sec.offsetTop;
  //     pageTop = window.pageYOffset;

  //     if(window.pageYOffset >= sectionTop) {
  //       currentSection = sec.getAttribute('id');
  //       pageTop = window.pageYOffset;

  //     } else {
  //       console.log(currentSection + ' top : ' + sectionTop);
  //       console.log("pageYoffset: " + pageTop);
  //     }
  //   })

  //   navLi.forEach((a)=> {
  //     a.classList.remove('activeLink');
  //     if(a.classList.contains(currentSection)){
  //       a.classList.add('activeLink');
  //       console.log('current: ' + currentSection);
  //     }
  //   })

  // })



  const scrollPosition = useScrollPosition()

  const sections = document.querySelectorAll('.section')
  let current = '';

  sections.forEach(section => {

    if (scrollPosition >= section.offsetTop) {
      current = section.getAttribute('id');
      // console.log(current);
      // console.log(scrollPosition + ' Vs ' + section.offsetTop + ' ' + current);

    } 
    // else {
    //   console.log(scrollPosition + ' Vs ' + section.offsetTop);
    // }
  })

  const navlink = document.querySelectorAll('.left-nav nav ul li a')
  // console.log(navlink);

  navlink.forEach(a => {
    a.classList.remove('activeLink');

    if (a.classList.value === current) {
      a.classList.add('activeLink')
      // console.log(a.classList.value + ' ' + current)
    }

  })


  return (
    <div className='left-nav'>
      <nav>
        <ul>
          <li><a className='home' href="#home">H<br />O<br />M<br />E</a></li>
          <li><a className='skills' href="#skills">S<br />K<br />I<br />L<br />L<br />S</a></li>
          <li><a className='works' href="#works">W<br />O<br />R<br />K<br />S</a></li>
          <li><a className='about' href="#about">A<br />B<br />O<br />U<br />T</a></li>
          <li><a className='contact' href="#contact">C<br />O<br />N<br />T<br />A<br />C<br />T</a></li>
        </ul>
      </nav>
    </div>
  )
}
