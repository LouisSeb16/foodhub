import React from 'react'

const Card = ({icon, title, text}) => {
    return (
        <div className="card">
            <div className="icon-div">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Card
