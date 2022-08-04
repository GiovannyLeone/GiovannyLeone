import React from 'react'
import Me from '../assets/img/KO.png'
import $ from 'jquery'
import gitHub from '../assets/img/extras/git2.svg'
import linkedin1 from '../assets/img/extras/linkedin_icon.svg'
import resume from '../assets/img/extras/resume.svg'





export default function Extras() {


    return (
        <>
            <div className="extras">
                <img src={gitHub} alt="Git Hub" />
                <img src={linkedin1} alt="¨Linkedin" />
                <img src={resume} alt="Currículo" />
                <div className="beta">BETA</div>
            </div>
            {/* @click="openURL('https://github.com/GiovannyLeone')" */}
            {/* @click="openURL('https://instagram.com/leonedeveloper')" */}
            {/* @click="openURL('https://docs.google.com/document/d/1cV_2W4S1v0XS8BhMQZBKXtfCy_Z2EpmICDVxm7Oy8g0/edit?usp=sharing')"  */}
        </>

    )

}