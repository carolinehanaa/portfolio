import React from 'react'
import { Row, Container } from 'react-bootstrap';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import paper from '../assets/paperlogo.png';
import resume from "../assets/CarolineHana_Resume.pdf"

function FooterComponent() {
  return (
    <Container>
      <div className='footer'>
        
          <div className='info'>
            <p>Phone Number: (209)-505-4264</p>
            <p>Email: carolinehana28@gmail.com</p>
          </div>
          <div>
          <a href="https://www.linkedin.com/in/caroline-hana/" target="_blank"><img className='linkedin' src={linkedin}  alt='linkedin'/></a>
          <a href="https://github.com/carolinehanaa" target="_blank"><img className='github' src={github} alt='git' /></a>
          <a href={resume} target="_blank"><img className='paper' src={paper} /></a>
          </div>
       
      </div>
    </Container>
  )
}

export default FooterComponent