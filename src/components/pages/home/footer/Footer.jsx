import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as IoIcons from 'react-icons/io5';
import SMediaIcons from '../hero/SMediaIcons';
import ScheduleTemplate from './ScheduleTemplate';
import './../../../../styles/index.scss';



const Footer = () => {
    return (
        <Container fluid className="footer">
            <Container>
                <Row>
                    <Col sm={6} id="com">
                        <div className="footer-brand">
                            <IoIcons.IoBonfireSharp className='logo'/> <h1>Foodhub</h1>
                        </div>
                        <p>
                            Foodhub is food restuarant / company created to provide quality and standard food.
                        </p>
                        <SMediaIcons/>
                    </Col>
                    <Col sm={6} id="other">
                        <Row>
                            <Col sm={6}>
                                <h3>Opening Hours</h3>
                                <ScheduleTemplate day={'Monday'} time={'Closed'}/>
                                <ScheduleTemplate day={'Tuesday'} time={'10:00am - 10:00pm'}/>
                                <ScheduleTemplate day={'Wednesday'} time={'10:00am - 10:00pm'}/>
                                <ScheduleTemplate day={'Thursday'} time={'10:00am - 10:00pm'}/>
                                <ScheduleTemplate day={'Friday'} time={'10:00am - 10:00pm'}/>
                                <ScheduleTemplate day={'Saturday'} time={'10:00am- 10:00pm'}/>
                                <ScheduleTemplate day={'Sunday'} time={'10:00am - 10:00pm'}/>

                            </Col>
                            <Col sm={6} id="cont">
                                <h3>Contact Us</h3>
                                <p>(+234) 8140794397</p>
                                <p>info@foodhub.com</p>
                                <p>No.3 Ajuruchi Cresent, Owerri</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div>
                    <h5 className="copyright">Copyright © 2021 Foodhub Technologies</h5>
                </div>
            </Container>
        </Container>
    )
}

export default Footer
