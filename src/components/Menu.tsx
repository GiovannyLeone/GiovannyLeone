import React from 'react'
import Me from '../assets/img/KO.png'
import $ from 'jquery'
import menu from '../assets/img/menu/menu.svg'
import close from '../assets/img/menu/close.svg'





export default function Menu() {
    function comingSoon() {
        alert("Em breve | Coming soon")
        return false
    }


    return (
        <>
            <div className="menu" onClick={()=>{comingSoon()}}>
            {/* <img src={close} alt="" v-if="opened" />
            <img src={menu} alt="" v-if="!opened" /> */}

                <span></span>
                <span></span>
                <span></span>
            </div>
            </>

     )

}