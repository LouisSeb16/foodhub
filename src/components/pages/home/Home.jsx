import React from 'react'
import Hero from './hero/Hero'
import Credit from './credit/Credit'
import Dishes from './dishes/Dishes'
import About from './about/About'
import News from './news/News'
import Gallery from './gallery/Gallery'
import Footer from './footer/Footer'

const Home = () => {
    return (
        <>
            <Hero/>
            <Credit/>
            <Dishes/>
            <About/>
            <News/>
            <Gallery/>
            <Footer/>
        </>
    )
}

export default Home
