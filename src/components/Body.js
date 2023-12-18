import React from "react";
import img from '../assets/img.png'
import '../styles/middle.css'

function Body() {

    return (
        <div>
            <div className="banner">
                <h1 className="banner-title">ბლოგი</h1> {/* Replace with your text */}
                <img src={img} alt="Banner" className="banner-image" />
            </div>
            <div className="categories">

            </div>
        </div>
    )
}

export default Body