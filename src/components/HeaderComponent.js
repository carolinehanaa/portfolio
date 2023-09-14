import React from 'react'
import snapshot from '../assets/snapshot.jpg';
import { Container } from 'react-bootstrap';


function HeaderComponent() {

    return (
        <Container>
            <div className='row-fix'>
                <div>
                    <img className="jelly" src={snapshot} alt="An image" />
                </div>
                <div className='col-lg-8 col-md-6 about-me'>
                    <p >Hello, my name is Caroline and I am located in Modesto, CA. I am passionate about pursuing a career in web development and am particularly fond of working with React. What motivates me most is the ability to make a difference through my work, and I am excited about the potential to create innovative and impactful solutions for clients and users alike.</p>
                </div>
            </div>
        </Container>
    );

}

export default HeaderComponent