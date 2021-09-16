import React from 'react'
import CardComponent from './CardComponent'
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import imgOne from './../../../../../assests/img/drinks/brian-jones-YBlcnXfv9OM-unsplash.jpg';
import imgTwo from './../../../../../assests/img/drinks/fidel-fernando-tfLBYGwDews-unsplash.jpg';
import imgThree from './../../../../../assests/img/drinks/jack-dong-bSS9_IQGxCo-unsplash.jpg';
import imgFour from './../../../../../assests/img/drinks/michael-fousert-K85v7YM_7vk-unsplash.jpg';



import { Col, Row } from 'react-bootstrap';

const Drinks = () => {
    return (
        <div className="slider-menu-con">
            <Row id="row">
                <Col sm={3}>
                    <CardComponent
                        img = {imgOne}
                        title = 'Black Label'
                        ingredients = {`Iced and mixed Black Label`}
                        cal = '234'
                        veg = {<FaIcons.FaCarrot/>}
                        mt = {<GiIcons.GiChickenOven/>}
                        price = '12.00'
                    />
                </Col>
                <Col sm={3}>
                    <CardComponent
                        img = {imgTwo}
                        title = 'Jose Cuerva'
                        ingredients = {`Iced and mixed Jose Cuerva`}
                        cal = '234'
                        veg = {<FaIcons.FaCarrot/>}
                        mt = {<GiIcons.GiChickenOven/>}
                        price = '12.00'
                    />
                </Col>
                <Col sm={3}>
                    <CardComponent
                        img = {imgThree}
                        title = 'Absolut Vodka'
                        ingredients = {`Iced and mixed Absolut vodka`}
                        cal = '234'
                        veg = {<FaIcons.FaCarrot/>}
                        mt = {<GiIcons.GiChickenOven/>}
                        price = '12.00'
                    />
                </Col>
                <Col sm={3}>
                    <CardComponent
                        img = {imgFour}
                        title = 'Bacardi 151'
                        ingredients = {`Iced and mixed Barcardi 151`}
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

export default Drinks
