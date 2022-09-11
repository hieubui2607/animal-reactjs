import React from "react"
import Brand from "../../components/Brand"
import Navbar from "../../components/Navbar"
import './Header.scss'

const Header = () => {
    return (
        <div className="container">
            <div className="row header-stl">
                <Brand />
                <div className="ctn-navbar">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Header