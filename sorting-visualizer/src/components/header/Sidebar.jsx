import React from 'react'
import './sidebar.css';

import Popup from '../card/Card';

import {FaHome} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import {ImBooks} from 'react-icons/im'
import {MdOutlinePhonelinkSetup} from 'react-icons/md'
import {MdOutlineWork} from 'react-icons/md'
import {FaMapMarkerAlt} from 'react-icons/fa'

import { useState } from 'react'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}>
        <FaHome className='icon'/>
      </a>
      <a onClick={() => setButtonPopup(true)}
      className={activeNav}>
        <BsFillPeopleFill className='icon'/>
        </a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')}
      className={activeNav === '#Experience' ? 'active' : ''}>
        <ImBooks/>
      </a>
      <a href="#Services" onClick={() => setActiveNav('#Services')}
      className={activeNav === '#Services' ? 'active' : ''}>
        <MdOutlinePhonelinkSetup className='icon'/>
      </a>
      <a href="#Portfolio"onClick={() => setActiveNav('#Portfolio')}
      className={activeNav === '#Portfolio' ? 'active' : ''}>
        <MdOutlineWork className='icon'/>
        </a>
      <a href="#Contacts" onClick={() => setActiveNav('#Contacts')}
      className={activeNav === '#Contacts' ? 'active' : ''}>
        <FaMapMarkerAlt className='icon'/>
      </a>
 
    </nav>

    <div className='Popup'>
      <Popup trigger={buttonPopup} setTrigger ={setButtonPopup}>
        <h1>hi</h1>
      </Popup>
    </div>
    </>

    
  )
}

export default Nav
