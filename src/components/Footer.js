import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"


function Footer() {
    return (
        <div className="bg-primary p-3 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <ul className="links">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/privacy">PRIVACY/T&C</Link></li>
                            <li><Link to="/contact">CONTACT US</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-8 col-sm-6 col-md-6 copyright-text">
                        <p className="">© 2020 tempemailco.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
