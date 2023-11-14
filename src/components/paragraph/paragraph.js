import React from 'react'
import './paragraph.css'

const Paragraph = ({pColor , content}) => {
    return (
        <p className='p' style={{ color : pColor }}>
            {content}
        </p>
    )
}

Paragraph.defaultProps = {
    color: 'orange'
}
   

export default Paragraph;