import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-scroll'

function Header() {
    return (
        <div id="main">
            <Navbar />
            <div className="name">
                <h1>It's a <span>ReactJS</span>Website</h1>
                <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <div className="header-btns">
                    {/* <a href="#" className="cv-btn">Hire me</a> */}
                    <Link to="#" className="cv-btn"> Hire me</Link>
                    <Link to="#" className="cv-btn1"> Download App</Link>
                    {/* <a href="#" className="cv-btn1">Download App</a> */}
                    
                </div>
            </div>

            <div className="arrow">

            </div>
            
        </div>
    )
}

export default Header
