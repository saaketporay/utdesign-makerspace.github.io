import React from "react"
import { Container, Row, Col, Modal, Button } from "react-bootstrap"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import interactionPlugin from '@fullcalendar/interaction';


class Calendar extends React.Component {
    constructor() {
        super();
        this.state = { events: [], modalOpen: false, currentEvent: {title: "", description: "", start: new Date(), end: new Date(), rsvp: ""} }
    }
    render() {
        return (
            <section id="cal">
                <Container>
                    <Row>
                        <Col sm="12" className="text-center">
                            <h2 className="section-heading text-uppercase">Calendar</h2>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: 45 }}>
                        <Col sm="12">
                            <FullCalendar
                                defaultView="dayGridMonth"
                                plugins={[dayGridPlugin, interactionPlugin, googleCalendarPlugin]}
                                googleCalendarApiKey="AIzaSyCSNMxYW6PAh1QM0woCWwRnmZKZtm_6sFw"
                                events={{ googleCalendarId: "8sv5eeliouchn2dodnoqb5tj0g@group.calendar.google.com" }}
                                eventClick={this.handleDateClick}
                                eventRender={this.handleEventLoad}
                            />
                            <Modal show={this.state.modalOpen} title="test" onHide={() => this.setState({ modalOpen: false })} style={{backgroundColor: 'none'}}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{this.state.currentEvent.title.replace(/<[^>]*>?/gm, '');}</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                        <span>{this.state.currentEvent.start.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} - {this.state.currentEvent.end.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} on {this.state.currentEvent.start.toLocaleString('default', { month: 'long' })} {this.getNumeralOrdinal(this.state.currentEvent.start.getDate())}</span>
                                        <p>{this.state.currentEvent.description.replace(/<[^>]*>?/gm, '');}</p>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                                        { this.state.currentEvent.rsvp ? <Button href={this.state.currentEvent.rsvp} style={{backgroundColor: 'green', borderColor: 'green'}}>RSVP</Button> : ""}
                                    </Modal.Footer>
                            </Modal>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <a href="https://calendar.google.com/calendar/embed?src=8sv5eeliouchn2dodnoqb5tj0g%40group.calendar.google.com&ctz=America%2FChicago" style={{color: "black"}} title="View on Google Calendar">View on Google Calendar</a>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }

    handleEventLoad = (info) => {

    }

    getNumeralOrdinal = (number) => number+(["th","st","nd","rd"][((number % 100)-20)%10]||["th","st","nd","rd"][number % 100]||["th","st","nd","rd"][0])
    
    handleDateClick = (arg) => {
        arg.jsEvent.preventDefault();
        console.dir(arg);
        const {title, start, end} = arg.event;
        let {description, location} = arg.event._def.extendedProps;
        let rsvp = null;
        let FindURL = description.match(/(ftp:\/\/|www\.|https?:\/\/){1}[a-zA-Z0-9u00a1-\uffff0-]{2,}\.[a-zA-Z0-9u00a1-\uffff0-]{2,}(\S*)/g);
        if(FindURL.length > 0){
            rsvp = FindURL[0];
            description = description.replace(rsvp, "");
        }
        this.setState({currentEvent: {title, start, end, description, rsvp, location}, modalOpen: true});
        console.log(this.state.currentEvent)
    }

    closeModal = () => {
        this.setState({modalOpen: false})
    }
}
export default Calendar
