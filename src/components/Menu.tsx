import React from 'react'
import Me from '../assets/img/KO.png'
import $ from 'jquery'
import menu from '../assets/img/menu/menu.svg'
import close from '../assets/img/menu/close.svg'





export default function Menu() {


    return (
        <>
            <div className="menu">
            <img src={close} alt="" v-if="opened" />
            <img src={menu} alt="" v-if="!opened" />
            </div>
            </>

     )

}