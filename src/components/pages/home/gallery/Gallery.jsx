import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './../../../../styles/index.scss';
import ImgCard from './ImgCard'
import imgOne from './../../../../assests/img/other/ella-olsson-KPDbRyFOTnE-unsplash.jpg'
import imgTwo from './../../../../assests/img/hero/hero-img-two.jpg'
import imgThree from './../../../../assests/img/other/louis-hansel-shotsoflouis-cH5IPjaAYyo-unsplash.jpg'
import imgfour from './../../../../assests/img/other/haseeb-jamil-J9lD6FS6_cs-unsplash.jpg'
import imgfive from './../../../../assests/img/other/brooke-lark-HlNcigvUi4Q-unsplash.jpg'
import imgSix from './../../../../assests/img/other/davide-cantelli-jpkfc5_d-DI-unsplash.jpg'
import imgSeven from './../../../../assests/img/other/shaafi-ali-Uck7TR7XYFo-unsplash.jpg'
import imgEight from './../../../../assests/img/other/jonathan-borba-xUtkfr-qBFU-unsplash.jpg'


const Gallery = () => {
    return (
        <Container fluid className="gallery">
            <Container>
                <Row>
                    <Col sm={3}>
                        <ImgCard src={imgOne}/>
                    </Col>
                    <Col sm={3}>
                        <ImgCard src={imgTwo}/>
                    </Col>
                    <Col sm={3}>
                        <ImgCard src={imgThree}/>
                    </Col>
                    <Col sm={3}>
                        <ImgCard src={imgfour}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <ImgCard src={imgfive}/>
                    </Col>
                    <Col sm={3}>
                        <ImgCard src={imgSix}/>
                    </Col>
                    <Col sm={3}>
                        <ImgCard src={imgSeven}/>
                    </Col>
                    <Col sm={3}>
                        <ImgCard src={imgEight}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Gallery
