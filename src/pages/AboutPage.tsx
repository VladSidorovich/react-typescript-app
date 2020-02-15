import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1> Cтраница информации</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quod deserunt id sit ducimus vel sed dolor quasi officia placeat!</p>
            <button className="btn" onClick={() => history.push('/')}> Обратно к списку дел</button>
        </>
    )
}