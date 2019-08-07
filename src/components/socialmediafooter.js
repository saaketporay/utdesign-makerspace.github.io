import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const SocialMediaFooter = () => {
    return (
        <ul className="list-inline social-buttons">
            <li className="list-inline-item">
                <a href="https://twitter.com/utdmakerspace" className="twitter-btn" title="Visit us on Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
            <li className="list-inline-item">
                <a href="https://www.instagram.com/utdmakerspace/" className="instagram-btn" title="Visit us on Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li className="list-inline-item">
                <a href="https://facebook.com/utdmakerspace" className="facebook-btn" title="Visit us on Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
            </li>
            <li className="list-inline-item">
                <a href="https://www.linkedin.com/company/40749650" className="linkedin-btn" title="Visit us on Linkedin">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </li>
        </ul>
    )
}

export default SocialMediaFooter