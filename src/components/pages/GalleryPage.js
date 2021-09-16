import React from 'react'
import Gallery from './home/gallery/Gallery'
import Footer from './home/footer/Footer'
import './../../styles/index.scss'


const GalleryPage = () => {
    return (
        <div className="box ex">
            <h1 className="h1">Gallery</h1>

            <Gallery/>
            <br/><br/>
            <Footer/>
        </div>
    )
}

export default GalleryPage
