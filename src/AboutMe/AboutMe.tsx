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
                    Hello, this is Arpit. I have been a <strong> blockchain developer</strong>, <strong>machine learning developer</strong> and <strong> full stack developer</strong>.
                    Currently I'm working
                    as a Software Engineering Intern at Nfinita, where we're building an NFT platform.
                </p>
                <a href="https://drive.google.com/file/d/1vNZPgcyf4bRnULUwja0eWdlXQbzlXQk-/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button>
                        View Resume
                    </button>
                </a>
            </div>
        </div>
    )
}

export default AboutMe
