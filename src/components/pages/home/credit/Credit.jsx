import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './../../../../styles/index.scss';
import Card from './Card';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';




const Credit = () => {
    return (
        <Container fluid className="credit">
            <Container>
                <Row>
                    <Col sm={4}>
                        <Card 
                            icon={<GiIcons.GiHotMeal/>}
                            title = 'Quality Meals'
                            text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultricies augue.'

                        />
                    </Col>
                    <Col sm={4}>
                        <Card 
                            icon={<GiIcons.GiWaterSplash/>}
                            title = 'Good Hygiene'
                            text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultricies augue.'

                        />
                    </Col>
                    <Col sm={4}>
                        <Card 
                            icon={<RiIcons.RiTakeawayLine/>}
                            title = 'Quick Deliveries'
                            text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultricies augue.'

                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Credit
