import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header_container'>
            {/* image container here  */}
            <div className="image_container">
                <img src="./is-elearning-your-best-choice.jpg" alt="" />
            </div>
            {/* header details container here  */}
            <div className="header_details">
                <h1 style={{ color: '#F05A04' }}>Welcome To e-Learning World</h1>
                <p style={{ color: '#F00436', fontWeight: 'bolder' }}>Learn From Home</p>
                <h3 style={{ color: 'rgb(128, 0, 0)' }}>There Are 25+ Course Available in Our e-Learning Site</h3>
            </div>

        </div>
    );
};

export default Header;