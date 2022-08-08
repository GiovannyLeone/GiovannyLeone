import React from 'react'
import Me from '../assets/img/profile3.png'
import $ from 'jquery'





export default function Profile() {


    function comingSoon() {
        alert("Em breve | Coming soon")
        return false
    }


    return (
        <>
            <div id='responsive'>
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
                                <text className="xl dev" x="18.5%" y="110%" dy=".35em" text-anchor="middle">Full-Stack Dev</text>
                            </svg>
                        </figure>
                        <p className='textAboutMe'>Olá Mundo! Me chamo Giovanny, tenho 19 anos e sou desenvolvedor junior. Desenvolvo aplicações web tanto Front-End
                            como Back-End, focado sempre em aprender mais, e agregar conhecimento ao meu time, possuo conhecimentos em HTML5, CSS3,
                            JavaScript, PHP, PDO, Jquery, React, Next.js, TypeScript, MySql, Sql Server e modelagem de banco dados.</p>
                        <button id='skills' onClick={() => { comingSoon() }}>My Soft Skills</button>
                        <button id='portfolio' onClick={() => { comingSoon() }}>Meet my Portfolio</button>
                    </div>
                </div>

            </div>
        </>

    )

}