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
                            <img className='ch-logo' src={logo} alt='logo' />
                            <p >CAROLINE HANA  |  JUNIOR WEB DEVELOPER
                                
                            </p>
                            
                        </div>
                    </Navbar.Brand>
                    {/* <Navbar.Brand className='nav-info'>
                       <p> <span ><br/>phone: (209)-505-4264
                                <br/>email: carolinehana28@gmail.com</span></p>
                    </Navbar.Brand> */}

                </Container>
            </Navbar>


        </div>
    )
}
