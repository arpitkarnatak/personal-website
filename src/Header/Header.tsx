import React from 'react'
import './Header.css'


function Header(props: {
    Tabs: any,
    setTabs: any
}) {
    return (
        <div className="Main">
            <div style={{ width: '100%', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="Header-Buttons-Group">

                    <div className="Header-Buttons" onClick={() => props.setTabs([true, false, false, false, false])}>
                        <div>
                            About Me
                        </div>
                    </div>
                    <div className="Header-Buttons" onClick={() => props.setTabs([false, true, false, false, false])}>
                        <div>
                            Projects
                        </div>
                    </div>
                    <div className="Header-Buttons" onClick={() => props.setTabs([false, false, true, false, false])}>
                        <div>
                            Work
                        </div>
                    </div>
                    <div className="Header-Buttons" onClick={() => props.setTabs([false, false, false, true, false])}>
                        <div>
                            Skills
                        </div>
                    </div>
                    <div className="Header-Buttons" onClick={() => props.setTabs([false, false, false, false, true])}>
                        <div>
                            Hobbies
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header
