import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import interactionPlugin from '@fullcalendar/interaction';

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = { events: [] }
    }
    render() {
        return (
            <section id="cal">
                <Container>
                    <Row>
                        <Col sm="12">
                            <FullCalendar
                                defaultView="dayGridMonth"
                                plugins={[dayGridPlugin, interactionPlugin, googleCalendarPlugin]}
                                googleCalendarApiKey="AIzaSyCSNMxYW6PAh1QM0woCWwRnmZKZtm_6sFw"
                                events={{ googleCalendarId: "8sv5eeliouchn2dodnoqb5tj0g@group.calendar.google.com" }}
                                eventClick={this.handleDateClick}
                                eventRender={this.handleEventLoad}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }

    handleEventLoad = (arg) => {
        //console.dir(arg)
    }

    handleDateClick = (arg) => {
        arg.jsEvent.preventDefault();
        //console.dir(arg)
    }
}
export default Calendar