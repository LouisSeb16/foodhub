import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './../../../../../styles/index.scss';

const CardComponent = ({img, title, ingredients, cal, veg, mt, price}) => {
    return (
        <div className="card">
            <div className="card-header">
                <img src={img} alt="img" className="img-fluid" />
            </div>
            <div className="card-body">
                <h4>{title}</h4>
                <p>{ingredients}</p>
                <Row>
                    <Col sm={8}>
                        <p> {`${cal} cal`} </p>
                        <span className="veg">
                            {veg}
                        </span>
                        <span className="mt">
                            {mt}
                        </span>
                    </Col>
                    <Col sm={4} className="text-right">
                        <p> {`$${price}`}</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CardComponent
