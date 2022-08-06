import React from 'react'
import Me from '../assets/img/KO.png'
import $ from 'jquery'
import gitHub from '../assets/img/extras/git2.svg'
import linkedin1 from '../assets/img/extras/linkedin_icon.svg'
import resume from '../assets/img/extras/resume.svg'





export default function Extras() {
    
    const blank = "_blank"


    return (
        <>
            <div className="extras">
                <a href="https://github.com/GiovannyLeone" target={blank}><img src={gitHub} alt="Git Hub" /></a>
                <a href="https://www.linkedin.com/in/giovanny-leone-a6484b228/" target={blank}><img src={linkedin1} alt="¨Linkedin" /></a>
                <a href="https://docs.google.com/document/d/1cV_2W4S1v0XS8BhMQZBKXtfCy_Z2EpmICDVxm7Oy8g0/edit?usp=sharing" target={blank}><img src={resume} alt="Currículo" /></a>
                <div className="beta">BETA</div>
            </div>
            {/* @click="openURL('https://github.com/GiovannyLeone')" */}
            {/* @click="openURL('https://instagram.com/leonedeveloper')" */}
            {/* @click="openURL('https://docs.google.com/document/d/1cV_2W4S1v0XS8BhMQZBKXtfCy_Z2EpmICDVxm7Oy8g0/edit?usp=sharing')"  */}
        </>

    )

}