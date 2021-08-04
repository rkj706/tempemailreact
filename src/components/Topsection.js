import React from 'react'
import NavBar from './Navbar'
import "./Topsection.css"
import topImg from "../assets/Image 2.png"
import EmailForm from './EmailForm'

function TopSection() {
    return (
        <div className="topbar">
            <NavBar />
            <section id="intro" className="">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-12 col-lg-5 px-3">
                            <EmailForm />
                        </div>
                        <div className="col-md-12 col-lg-5 px-0 text-center">
                            <img className = "w-75 img-fluid"src={topImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TopSection
