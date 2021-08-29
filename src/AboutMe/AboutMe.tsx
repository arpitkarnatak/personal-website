import React from 'react'
import Arpit from '../arpit.png'
import './AboutMe.css'

function AboutMe() {
    return (
        <div className="Outer-Div">
            <div className="Main-Heading">
                Arpit Karnatak
            </div>
            <div className="Inner-Div">

                <div className="image-div" style={{ background: Arpit }} />
                <p className="info">
                    Hello, this is Arpit. I am a <strong> blockchain enthusiast </strong>, <strong>machine learning enthusiast</strong> and <strong> web technologies</strong>.
                </p>
            </div>
        </div>
    )
}

export default AboutMe
