import React from 'react'
import { NavLink } from 'react-bootstrap'
import Style from './Header.module.css'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className={Style.header}>
        <span>logoName</span>

        <ul className={Style.navs}>
            <li>
                <NavLink>Home</NavLink>
            </li>
            <li>
                <NavLink>About</NavLink>
            </li>
           
                {/* <button>New Post</button> */}
                <Link to='/create-post'>New Post</Link>
           
        </ul>
    </div>
  )
}
