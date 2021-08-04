import React from 'react'
import "./Bottomsection.css"
import bottomImg1 from "../assets/bottom_pic1.svg"
import bottomImg2 from "../assets/bottom_pic2.svg"
import bottomImg3 from "../assets/bottom_pic3.svg"
import Footer from './Footer'

function Bottomsection() {
    return (
        <div>
            <section id = "services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-7">
                            <h2 className="heading mb-3">What is Disposable Temporary Email?</h2>
                            <p className="text"><span className="text-dark">Disposable email</span> - is a service that allows to receive email at a temporary address that self-destructed after a certain time elapses. It is also known by names like : tempmail, Disposable email, tempemail, 10minutemail, throwaway email, fake email or trash email. Many forums, Wi-Fi owners, websites and blogs ask visitors to register before they can view content, post comments or download something. tempemailco - is most advanced throwaway email service that helps you avoid spam and stay safe.</p>
                        </div>
                        <div className ="col-md-12 col-lg-5 text-center">
                            <img className = "w-75 img-fluid"src={bottomImg1} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="intro" className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 text-center">
                            <img className = "w-75 img-fluid"src={bottomImg2} alt="" />
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <h2 className="heading mb-3">Where can you use Desposable/Temproray Email</h2>
                            <p className="text"><span className="text-dark">Temporary emails</span> are perfect for any transaction where you want to improve your online privacy. Use them when you buy or sell Bitcoins or trade cryptocurrency, at exchanges, or locally. They can be used for QA testing of emails, quick registrations and even for dating profiles and accounts. You can make your private temporary email address fast, and use it to help protect your online privacy.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id = "services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-7">
                            <h2 className="heading mb-3">About TempEmailCo</h2>
                            <p className="text"><span className="text-dark">tempemailco.com</span> is the premier site for all things relating to temporary, disposable and throwaway email addresses. We want to help you avoid SPAM, protect your online privacy, and stop you from having to give away your personal email address to every company and person on the internet who insists on you giving it to them. We work hard and will continue to work hard to give you a disposable email address that works with any site or app. We hope to help give you back the control of deciding who you want to give your personal info to.</p>
                        </div>
                        <div className ="col-md-12 col-lg-5 text-center">
                            <img className = "w-75 img-fluid"src={bottomImg3} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Bottomsection
