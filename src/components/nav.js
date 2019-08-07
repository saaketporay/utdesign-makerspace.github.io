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
                    <Image src={require("../dist/img/logos/Logo-bg.webp")} alt="UTDesign Makerspace Logo" width={70} style={{"position":"relative","left":"-5px","marginRight":"10px"}}></Image>
                    UTDesign Makerspace
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Link className="nav-link" to="/#services" title="Scroll to Services Section">Services</Link>
                        <Link className="nav-link" to="/#cal" title="Scroll to Calendar Section">Calendar</Link>
                        <Link className="nav-link" to="/#team" title="Scroll to Team Section">Team</Link>
                        <Link className="nav-link" to="/#faq" title="Scroll to F.A.Q. Section">FAQ</Link>
                        <Link className="nav-link" to="/#contact" title="Scroll to Contact Section">Contact</Link>
                        <Nav.Link href="https://utdesignmakerspace-wiki.herokuapp.com/" title="Visit our Wiki">Wiki</Nav.Link>
                        <Nav.Link href="https://app.slack.com/client/TDM5QBZND/CDP5WT7JS" title="Join our slack" className="slack-btn"><FontAwesomeIcon icon={faSlack} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


export default NavSection
