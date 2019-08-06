import React from "react"
import { Navbar, Nav, Image } from "react-bootstrap"
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlack } from '@fortawesome/free-brands-svg-icons' 


const NavSection = () => {

    return (
        <>
            <Navbar expand="lg" style={{'backgroundColor': '#c1393e'}} className="navbar navbar-expand-lg navbar-dark fixed-top">
                <Navbar.Brand style={{"fontFamily":"Montserrat"}}>
                    <Image src={require("../dist/img/logos/Logo-bg.webp")} width={70} style={{"position":"relative","left":"-5px","marginRight":"10px"}}></Image>
                    UTDesign Makerspace
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Link className="nav-link" to="/#services">Services</Link>
                        <Link className="nav-link" to="/#cal">Calendar</Link>
                        <Link className="nav-link" to="/#team">Team</Link>
                        <Link className="nav-link" to="/#faq">FAQ</Link>
                        <Link className="nav-link" to="/#contact">Contact</Link>
                        <Nav.Link href="http://wiki.utdmaker.space">Wiki</Nav.Link>
                        <Nav.Link href="https://app.slack.com/client/TDM5QBZND/CDP5WT7JS" className="slack-btn"><FontAwesomeIcon icon={faSlack} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


export default NavSection

/*
<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
*/