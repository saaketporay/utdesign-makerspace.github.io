import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="masthead" style={{"backgroundImage": require("../images/background.jpg")}}>
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in"><span>Welcome To Your Space</span></div>
        <div className="intro-heading text-uppercase"></div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" role="button" href="#services">Learn more</a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
