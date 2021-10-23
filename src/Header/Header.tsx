import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="Main">
            <div style={{ width: '100%', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="Header-Buttons-Group">

                    <Link to='/' className="Header-Buttons" >
                        <div>
                            About Me
                        </div>
                    </Link>
                    <Link to='/projects' className="Header-Buttons">
                        Projects
                    </Link>
                    <Link to='/work' className="Header-Buttons" >
                        Experience
                    </Link>
                    {/* <Link to='/skills' className="Header-Buttons" >
                        Skills
                    </Link>
                    <Link to='/skills' className="Header-Buttons" >
                        Hobbies
                    </Link> */}
                </div>

            </div>

        </div>
    )
}

export default Header
