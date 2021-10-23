import React from 'react'
import Arpit from '../arpit.png'
import './AboutMe.css'
import Profile from '../profile.json'

function AboutMe() {
    const { resume, name, email } = Profile
    return (
        <div className="Outer-Div">
            <div className="Main-Heading">
                {name}
            </div>
            <div className="Inner-Div">

                <div className="image-div" style={{ background: Arpit }} />
                <p className="info">
                    Hello, this is Arpit. I have been a <strong> blockchain developer</strong>, <strong>machine learning developer</strong> and <strong> full stack developer</strong>.
                    Currently I'm working
                    as a Software Developer at Nfinita, where we're building an NFT platform.
                </p>
                <a href={resume} target="_blank" rel="noreferrer">
                    <button>
                        View Resume
                    </button>
                </a>{/* 
                <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                    <button>
                        Say Hello
                    </button>
                </a> */}
            </div>
        </div>
    )
}

export default AboutMe
