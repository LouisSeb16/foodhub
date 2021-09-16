import React from 'react'
import CardComponent from './CardComponent'
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import imgOne from './../../../../../assests/img/other/randy-fath-otQ6orzFTlk-unsplash.jpg';
import imgTwo from './../../../../../assests/img/other/jonathan-borba-xUtkfr-qBFU-unsplash.jpg';
import imgThree from './../../../../../assests/img/other/janice-lin-yUIN4QWKCTw-unsplash.jpg';
import imgFour from './../../../../../assests/img/other/haseeb-jamil-J9lD6FS6_cs-unsplash.jpg';



import { Col, Row } from 'react-bootstrap';

const Deserts = () => {
    return (
        <div className="slider-menu-con">
            <Row id="row">
                <Col sm={3}>
                    <CardComponent
                        img = {imgOne}
                        title = 'Spicy Beef and fresh beet humus'
                        ingredients = {`Beef, lemon, humus, salad and mango`}
                        cal = '234'
                        veg = {<FaIcons.FaCarrot/>}
                        mt = {<GiIcons.GiChickenOven/>}
                        price = '12.00'
                    />
                </Col>
                <Col sm={3}>
                    <CardComponent
                        img = {imgTwo}
                        title = 'Hot Cocoa and Wafers'
                        ingredients = {`Lutus, lemon, buuter, salad and berries`}
                        cal = '234'
                        veg = {<FaIcons.FaCarrot/>}
                        mt = {<GiIcons.GiChickenOven/>}
                        price = '12.00'
                    />
                </Col>
                <Col sm={3}>
                    <CardComponent
                        img = {imgThree}
                        title = 'Spicy Beef and fresh beet humus'
                        ingredients = {`Beef, lemon, humus, salad and mango`}
                        cal = '234'
                        veg = {<FaIcons.FaCarrot/>}
                        mt = {<GiIcons.GiChickenOven/>}
                        price = '12.00'
                    />
                </Col>
                <Col sm={3}>
                    <CardComponent
                        img = {imgFour}
                        title = 'Spicy Beef and fresh beet humus'
                        ingredients = {`Beef, lemon, humus, salad and mango`}
                        cal = '234'
                        veg = {<FaIcons.FaCarrot/>}
                        mt = {<GiIcons.GiChickenOven/>}
                        price = '12.00'
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Deserts
