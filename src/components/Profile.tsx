import React from 'react'
import Me from '../assets/img/me.png'
import $ from 'jquery'





export default function Profile() {


    function teste() {
        alert("!!!")
        return false
    }


    return (
        <>
        <div>
                <section>
                    <span className="starts"></span>
                    <span className="starts"></span>
                    <span className="starts"></span>
                    <span className="starts"></span>
                    <span className="starts"></span>
                    <span className="starts"></span>
                    <span className="starts"></span>
                    <span className="starts"></span>
                    <span className="starts"></span>
                    <span className="starts"></span>
                </section>
            </div>
            <div id='profile'>
                <div id='myPicture'>
                    <img src={Me} alt="Esse sou eu" className='me animated zoom delay-1s' />
                </div>
                <div id='aboutMe'>
                    <figure>
                        <svg viewBox="0 0 1320 300">
                            <text className="xl g" x="17%" y="65%" dy=".35em" text-anchor="middle">Giovanny</text>
                            <text className="xl l" x="25%" y="90%" dy=".35em" text-anchor="middle">Leone</text>
                            <text className="xl dev" x="18.5%" y="110%" dy=".35em" text-anchor="middle">Dev Full-Stack Junior</text>
                        </svg>
                    </figure>
                    <p className='textAboutMe'>Olá Mundo! Me chamo Giovanny, Tenho 19 anos sou estudante de ensino técnico, desenvolvo aplicações web tanto Front-End
                        como Back-End, focado sempre em aprender mais, possuo conhecimentos em HTML5, CSS3,
                        JavaScript, PHP, Jquery, React, Next.js, TypeScript, MySql, Sql Server e modelagem de
                        banco dados.</p>
                    <button id='skills' onClick={()=>{teste()}}>My Soft Skills</button>
                    <button>Meet my Portfolio</button>
                </div>
            </div>

        
        </>

    )

}