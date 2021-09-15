import React from 'react'
import {Tab, Nav, Container, Row, Col, } from 'react-bootstrap';
import './../../../../styles/index.scss';
import Starters from './categories/Starters';
import DishesCat from './categories/DishesCat';



const Dishes = () => {
    return (
        <Container fluid className='dishes'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={6} className='title'>
                        <h1>Check our best dishes</h1>
                    </Col>
                    <Col sm={6}>
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Starters</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Dishes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Deserts</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Drinks</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>


                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Starters/>
                            <button type="button">View All</button>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <DishesCat/>
                            <button type="button">View All</button>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            hi
                            <button type="button">View All</button>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            hi
                            <button type="button">View All</button>
                        </Tab.Pane>
                    </Tab.Content>
            </Tab.Container>
        </Container>

    )
}

export default Dishes
