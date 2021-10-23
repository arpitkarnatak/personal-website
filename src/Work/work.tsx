import React from 'react'
import './workex.css'
import Profile from '../profile.json'

function WorkEx() {
    console.table(Profile)
    const { work } = Profile
    return (

        <div style={{ textAlign: 'left', padding: '5%' }} className="Work-Ex-Main">
            {work.map((workplace) =>
                <div>
                    <h1 className="Work-Ex-Company-Name">
                        {workplace.company}
                    </h1>
                    <h2>{workplace.position}</h2>
                    <h4>{workplace.tenure.from} - {workplace.tenure.to}</h4>
                    <br />
                    {workplace.responsibilities.map((tasks) =>
                        <li className="resposibilities">{tasks}</li>
                    )}
                    <br /><br />

                </div>
            )}
        </div>
    )
}

export default WorkEx
