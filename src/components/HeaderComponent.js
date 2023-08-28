import React from 'react'


function HeaderComponent() {

    return (
        <div className="container">
            <div className='row-fix'>
                <div>
                    <img className="jelly" src='https://danielhanastorage.blob.core.windows.net/portfolio/chanaheadshotcompressed.jpg' alt="An image" />
                </div>
                <div className='col-lg-8 col-md-6 col-sm-2 about-me'>
                    <p >Hello, my name is Caroline and I am located in Modesto, CA. I am passionate about pursuing a career in web development and am particularly fond of working with React. What motivates me most is the ability to make a difference through my work, and I am excited about the potential to create innovative and impactful solutions for clients and users alike.</p>
                </div>
            </div>
        </div>
    );

}

export default HeaderComponent