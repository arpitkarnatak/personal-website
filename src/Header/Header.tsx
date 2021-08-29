import React from 'react'
import './Header.css'


function Header(props: { displayAbout: boolean }) {
    return (
        <div className="Main">
            <div style={{ width: '100%', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="Header-Buttons-Group">
                    <a className="Header-Buttons" href="https://drive.google.com/file/d/1vNZPgcyf4bRnULUwja0eWdlXQbzlXQk-/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div>
                            Resume
                        </div>
                    </a>
                    <a className="Header-Buttons" href="https://drive.google.com/file/d/1vNZPgcyf4bRnULUwja0eWdlXQbzlXQk-/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div>
                            Academia
                        </div>
                    </a>
                    <a className="Header-Buttons" href="https://drive.google.com/file/d/1vNZPgcyf4bRnULUwja0eWdlXQbzlXQk-/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div>
                            Projects
                        </div>
                    </a>
                    <a className="Header-Buttons" href="https://drive.google.com/file/d/1vNZPgcyf4bRnULUwja0eWdlXQbzlXQk-/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div>
                            Work
                        </div>
                    </a>
                    <a className="Header-Buttons" href="https://drive.google.com/file/d/1vNZPgcyf4bRnULUwja0eWdlXQbzlXQk-/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div>
                            Hobbies
                        </div>
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Header
