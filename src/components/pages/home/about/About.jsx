import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './../../../../styles/index.scss';
import imgOne from './../../../../assests/img/other/ella-olsson-KPDbRyFOTnE-unsplash.jpg'
import imgTwo from './../../../../assests/img/hero/hero-img-two.jpg'
import imgThree from './../../../../assests/img/other/louis-hansel-shotsoflouis-cH5IPjaAYyo-unsplash.jpg'
import imgfour from './../../../../assests/img/other/haseeb-jamil-J9lD6FS6_cs-unsplash.jpg'


const About = () => {
    return (
        <Container fluid className='about'>
            <Container>
                <Row>
                    <Col sm={6} id="about-img">
                        <Row>
                            <Col sm={6} id="div">
                                <div id="top">
                                    <img src={imgOne} alt="img" className="img-fluid"/>
                                </div>
                                <div id="bottom" className="exp">
                                    <img src={imgfour} alt="img" className="img-fluid"/>
                                </div>

                            </Col>
                            <Col sm={6} id="div">
                                <div id="top" className="exp">
                                    <img src={imgThree} alt="img" className="img-fluid"/>
                                </div>
                                <div id="bottom">
                                    <img src={imgTwo} alt="img" className="img-fluid"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6} id="about-text">
                        <h1>Discover more about us</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ratione a,
                             assumenda facilis corporis eaque, quisquam voluptatum cum atque voluptas 
                             aperiam hic harum mollitia itaque laboriosam ipsum. Error, culpa cumque!
                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, autem praesentium magni 
                             dicta quaerat quis consequatur facilis sit voluptatibus maxime quia, exercitationem optio est 
                             neque numquam fuga cumque? Quasi, culpa?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, minus consequatur? Odit, officia. 
                            Ad vitae doloribus facilis officiis illum voluptas ex veritatis quas. Illum eos, 
                            officiis voluptatum officia incidunt est?
                        </p>
                    </Col>

                </Row>
            </Container>
        </Container>
    )
}

export default About
