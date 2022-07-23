import React from 'react'
import Me from '../assets/img/me.png'

export default function Profile() {

    return (
        <>
            <div id='profile'>
                <div id='myPicture'>
                    <img src={Me} alt="Esse sou eu" className='me' />
                </div>
                <div id='aboutMe'>
                    <h1 className='myName'>Giovanny Leone</h1>
                    <p className='textAboutMe'>Tenho 19 anos sou estudante de ensino técnico, desenvolvo aplicações web tanto Front-End
                        como Back-End, focado sempre em aprender mais, possuo conhecimentos em HTML5, CSS3,
                        JavaScript, PHP, Jquery, React.js, Next.js, typeScript, MySql, Sql Server e modelagem de
                        banco dados.</p>
                    <button>My Soft Skills</button>
                    <button>Meet my Portfolio</button>
                </div>
            </div>
        </>
    )

}