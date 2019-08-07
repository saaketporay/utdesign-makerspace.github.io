import React from "react"
import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToolbox, faWrench, faCalendar } from '@fortawesome/free-solid-svg-icons'

const Service = (props) => {
    const { icon, description, title } = props;
    return (
        <Col md="4">
            <span className="fa-stack fa-4x"><FontAwesomeIcon icon={icon} /></span>
            <h4 className="section-heading">{title}</h4>
            <p className="text-muted">
                {description}
            </p>
        </Col>
    )
}



const ServicesSection = () => {

    return (
        <>
            <section id="services" className="bg-light">
                <Row>
                    <Col lg="12" className="text-center">
                        <h2 className="text-uppercase section-heading">Services</h2>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Service title="Workspace" description={`We provide space for students to study, work on projects or just hang out.`} icon={faToolbox} />
                    <Service title="Tool Access" description={`We provide various tools and equipment to help you build your dreams.`} icon={faWrench} />
                    <Service title="Workshops" description={`Anyone can teach a workshop about anything. Interested in teaching something click here.`} icon={faCalendar} />
                </Row>
                <Row className="text-center">
                    <Col sm="12">
                        <a href="https://utdesignmakerspace.typeform.com/to/JcM2uX" className="join-btn">Join Now</a>
                    </Col>
                </Row>
                
            </section>
        </>
    )
}


export default ServicesSection