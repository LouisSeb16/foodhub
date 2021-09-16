import React from 'react'
import CardComponent from './CardComponent'
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import imgOne from './../../../../../assests/img/other/caroline-attwood-bpPTlXWTOvg-unsplash.jpg';
import imgTwo from './../../../../../assests/img/other/brooke-lark-HlNcigvUi4Q-unsplash.jpg';
import imgThree from './../../../../../assests/img/other/davide-cantelli-jpkfc5_d-DI-unsplash.jpg';
import imgFour from './../../../../../assests/img/other/shaafi-ali-Uck7TR7XYFo-unsplash.jpg';



import { Col, Row } from 'react-bootstrap';

const DishesCat = () => {
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

export default DishesCat
