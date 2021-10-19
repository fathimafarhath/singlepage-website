import React from 'react'

function Box() {
    return (
        <div className="s-box">
            <div className="s-b-img">
                <img src={props.image} alt="img1"/>

            </div>
            <div className="s-b-text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="#" className="cv-btn">{}</a>
            </div>
            
        </div>
    )
}

export default Box
