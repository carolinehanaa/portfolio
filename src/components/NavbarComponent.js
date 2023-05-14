import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import logo from '../assets/ch-logo.png';
import '../App.css';



export default function () {
    return (
        <div>
            <Navbar className='bg'>
                <Container>
                    <Navbar.Brand >
                        <div className='name'>
                            <img className='ch-logo' src={logo} alt='logo'/>
                            <p >CAROLINE HANA | JUNIOR WEB DEVELOPER</p>

                            
                        </div>
                    </Navbar.Brand>
                    
                </Container>
            </Navbar>


        </div>
    )
}
