import React from 'react'
import { Row } from 'react-bootstrap';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import C from '../assets/Csharp.png';
import sql from '../assets/SQL.png';
import js from '../assets/JavaScript.png';
import ts from '../assets/ts.png';
import react from '../assets/react-logo.png';
import bootstrap from '../assets/Bootstrap.png';
import dotnet from '../assets/.NET.png';
import tailwind from '../assets/tailwind.png';
import unity from '../assets/unity.png';
import notion from '../assets/notion.png';
import git from '../assets/github.png';
import jira from '../assets/jira.png';
import figma from '../assets/figma.png';
import drawio from '../assets/drawio.png';


function SkillsComponent() {
    return (
        <div>
            <div className="container">
                <div className='row-fix'>
                    <h1 className='projects-title'> SKILLS</h1>
                </div>
                <Row className='projects-row'>
                    <div className='skills'>
                        <div className='col-3'>
                            <h1 className='projects-subtitle'> Technologies/ <span>Languages</span></h1>
                            <ul className='skills-desc'>
                                <li className='skills-logo' >HTML<img className='circle-logo' src={HTML} alt='html'/> </li>
                                <li className='skills-logo' >CSS <img className='circle-logo' src={CSS} alt='css'/> </li>
                                <li className='skills-logo'>C# <img className='logo' src={C} alt='c#'/> </li>
                                <li className='skills-logo'>SQL <img className='sql-logo' src={sql} alt='sql'/> </li>
                                <li className='skills-logo'>JavaScript <img className='logo' src={js} alt='js'/> </li>
                                <li className='skills-logo'>TypeScript <img className='logo' src={ts} alt='ts'/> </li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <h1 className='projects-subtitle' >Frameworks/ <span>Libraries</span></h1>
                            <ul className='skills-desc'>
                                <li className='skills-logo'>React <img className='logo' src={react} alt='react'/> </li>
                                <li className='skills-logo'>Bootstrap <img className='logo' src={bootstrap} alt='bootstrap'/> </li>
                                <li className='skills-logo'>.NET <img className='logo' src={dotnet} alt='.net'/> </li>
                                <li className='skills-logo'>Tailwind CSS <img className='logo' src={tailwind} alt='tailwind'/> </li>
                                <li className='skills-logo'>Unity <img className='logo' src={unity} alt='unity'/> </li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <h1 className='projects-subtitle' >Productivity</h1>
                            <ul className='skills-desc'>
                                <li className='skills-logo'>Notion <img className='logo' src={notion} alt='notion'/> </li>
                                <li className='skills-logo'>Git <img className='logo' src={git} alt='git'/> </li>
                                <li className='skills-logo'>Jira <img className='logo' src={jira} alt='jira'/> </li>
                                <li className='skills-logo'>Figma <img className='logo' src={figma} alt='figma'/> </li>
                                <li className='skills-logo'>Draw.io <img className='logo' src={drawio} alt='drawio'/> </li>
                            </ul>
                        </div>


                    </div>
                </Row>


            </div>
        </div>
    )
}

export default SkillsComponent