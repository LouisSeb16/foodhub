import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewsCard from './NewsCard';
import './../../../../styles/index.scss';
import imgOne from './../../../../assests/img/drinks/fidel-fernando-tfLBYGwDews-unsplash.jpg'
import imgTwo from './../../../../assests/img/drinks/jack-dong-bSS9_IQGxCo-unsplash.jpg'


const News = () => {
    return (
        <Container fluid className="news-con">
            <Container>
                <h1 className="text-center">Latest news</h1>
                <Row>
                    <Col sm={6}>
                        <NewsCard
                            img = {imgOne}
                            author = 'Louis Ajuruchi'
                            date = 'Sept 16, 2021'
                            title = 'The benefits of taking quality drinks'
                            intro = {`Lorem ipsum dolor sit amet, consectrtur something elit, and another is...`}
                            link = 'Continue reading'
                        />
                    </Col>
                    <Col sm={6}>
                        <NewsCard
                            img = {imgTwo}
                            author = 'Louis Ajuruchi'
                            date = 'Sept 16, 2021'
                            title = 'The benefits of taking quality drinks'
                            intro = {`Lorem ipsum dolor sit amet, consectrtur something elit, and another is...`}
                            link = 'Continue reading'
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default News
