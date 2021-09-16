import React from 'react'

const ScheduleTemplate = ({day, time}) => {
    return (
        <div className="time-card">
            <p>{day}</p>
            <p>{time}</p>
        </div>
    )
}

export default ScheduleTemplate
