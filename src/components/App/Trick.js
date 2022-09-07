import React from 'react'

const Trick = ({ id, name, stance, obstacle, tutorial }) => {
    return <div>
        <h1>{name}</h1>
        <ul>
            <li>{stance}</li>
            <li>{obstacle}</li>
            <li>{tutorial}</li>
        </ul>
    </div>
}



export default Trick;