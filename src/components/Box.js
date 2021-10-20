import React from 'react'
import { Link } from 'react-scroll'

function Box(props) {
    return (
        <div className="s-box">
            <div className="s-b-img">
                <img src={props.image} alt={props.alte}/>

            </div>
            <div className="s-b-text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                 {/* <a href="#" className="cv-btn">{props.button}</a>  */}
                <Link to="#" className="cv-btn">{props.button}</Link>
            </div>
            
        </div>
    )
}

export default Box
