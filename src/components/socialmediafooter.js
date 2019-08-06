import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const SocialMediaFooter = () => {
    return (
        <ul className="list-inline social-buttons">
            <li className="list-inline-item">
                <a href="https://twitter.com" className="twitter-btn">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
            <li className="list-inline-item">
                <a href="https://instagram.com" className="instagram-btn">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li className="list-inline-item">
                <a href="https://facebook.com" className="facebook-btn">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
            </li>
            <li className="list-inline-item">
                <a href="https://linkedin.com/" className="linkedin-btn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </li>
        </ul>
    )
}

export default SocialMediaFooter