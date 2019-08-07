import React from "react"

import SocialMediaFooter from "../components/socialmediafooter"

const Footer = ({ children }) => {

    return (

        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <span className="copyright">Copyright &copy; UTDesign Makerspace {new Date().getFullYear()}</span>
                    </div>
                    <div className="col-md-4">
                        <SocialMediaFooter />
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer
