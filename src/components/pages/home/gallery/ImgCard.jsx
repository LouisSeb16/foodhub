import React from 'react'
import * as BiIcons from 'react-icons/bs';


const ImgCard = ({src}) => {
    return (
        <div className="img-div">
            <img src={src} alt="img" className="img-fluid" />
            <span>
                {<BiIcons.BsSearch/>}
            </span>
        </div>
    )
}

export default ImgCard
