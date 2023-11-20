import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <div className='header'>
      <div><FaSpotify style={{ fontSize: '30px' }}/></div>
      <div>Spotify API</div>
      <div><GiHamburgerMenu style={{ fontSize: '30px' }} /></div>
    </div>
  )
}

export default Nav