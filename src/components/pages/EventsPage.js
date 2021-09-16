import React from 'react'
import Footer from './home/footer/Footer'
import News from './home/news/News'
import './../../styles/index.scss'


const EventsPage = () => {
    return (
        <div className="box ev">
            <News/>
            <Footer/>
        </div>
    )
}

export default EventsPage
