import React from 'react'
import Dishes from './home/dishes/Dishes'
import Footer from './home/footer/Footer'
import './../../styles/index.scss'

const MenuPage = () => {
    return (
        <div className="box mn">
            <Dishes/>
            <Footer/>
        </div>
    )
}

export default MenuPage
