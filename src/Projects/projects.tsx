import React from 'react'
import ProjectCard from './project-card'
import SortVis from '../sort-vis.png'
import './projects.css'
import PGame from '../2048.png'

function Projects() {
    return (
        <div className="Project-Main">
            <h2 className="Main-Heading" style={{ marginBottom: '3%', fontSize: '60px' }}>Personal Projects</h2>
            <div className='Grid'>
                <ProjectCard
                    projectName="Sorting Visualizer"
                    projectBio="A visualizer for sorting algorithm built using ReactJS"
                    demo="https://sorting-vis-by-arpit.netlify.app/"
                    github="https://github.com/arpitkarnatak/sorting-vis"
                    thumbnail={SortVis}
                />
                <ProjectCard
                    projectName="Task Manager"
                    projectBio="A task manager built using Python"
                    thumbnail="https://github.com/arpitkarnatak/task_manager/raw/main/Capture.PNG"
                    demo="https://sorting-vis-by-arpit.netlify.app/"
                    github="https://github.com/arpitkarnatak/task_manager"
                />
                <ProjectCard
                    projectName="Election Dapp"
                    projectBio="A decentralized voting application built using Ethereum blockchain and ReactJS"
                    demo="http://election-dapp-by-arpit.netlify.app/"
                    github="https://github.com/arpitkarnatak/election-dapp"
                    thumbnail="https://github.com/arpitkarnatak/election-dapp/blob/main/dapp-ss.PNG?raw=true"
                />
                <ProjectCard
                    projectName="2048"
                    projectBio="A CLI version of the famous game 2048 built using Python"
                    demo="https://replit.com/@ArpitKarnatak/2048?v=1"
                    thumbnail={PGame}
                />
                <ProjectCard
                    projectName="Open Banking (Ongoing)"
                    projectBio="Utilizing the concept of Zero Knowledge proof for building a truly decentralized banking service. Using IPFS for storage of information and Blockchain for fraud detection. The end goal for this project would be one-click banking solution."
                />
                <ProjectCard
                    projectName="Decentralized Shopping (Ongoing)"
                    projectBio={`Implementation of the paper "Mitigating Trust Issues in Electric Vehicle Charging using a Blockchain" by Professor Lukasz Golab from University of Waterloo. I'm building a system which can be used by any retail shop for buying and selling goods and not limiting to Electric Vehicles.`}
                />

            </div>
        </div>
    )
}

export default Projects
