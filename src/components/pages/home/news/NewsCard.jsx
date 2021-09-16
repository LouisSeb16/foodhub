import React from 'react'
import { Col, Row } from 'react-bootstrap'

const NewsCard = ({img, author, date, title, intro, link}) => {
    return (
        <div className="news-card">
            <Row>
                <Col sm={4}>
                    <img src={img} alt="img" className="img-fluid" />
                </Col>
                <Col sm={8} id='text-area'>
                    <div className="auth-div">
                        <small>{author}</small>
                        <small>{date}</small>
                    </div>
                    <h4>{title}</h4>
                    <p>{intro}</p>
                    <h5>{link}</h5>
                </Col>
            </Row>
        </div>
    )
}

export default NewsCard
