import React from 'react';
import NavThing from './NavThing';
import bagImg from '../assets/bag.png';
import appleImg from '../assets/apple.png';
import searchImg from '../assets/search.png';


export default function NavWrapper(){
    return (
        <div className = 'NavWrap'>
            <img src = {appleImg} />
            <NavThing title = 'Mac'/>
            <NavThing title = 'iPad'/>
            <NavThing title = 'iPhone'/>
            <NavThing title = 'Watch'/>
            <NavThing title = 'TV'/>
            <NavThing title = 'Music'/>
            <NavThing title = 'Support'/>
            <img src = {searchImg} />
            <img src = {bagImg} />
        </div>
    )
}