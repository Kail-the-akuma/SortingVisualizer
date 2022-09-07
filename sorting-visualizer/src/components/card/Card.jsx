import React from 'react'
import './card.css'
import {AiOutlineClose} from 'react-icons/ai'

function Popup(props)
{
 return(props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <a className='close-btn' onClick={() => props.setTrigger(false)}> 
                <AiOutlineClose className='icon'/>
                </a>
                {props.children}
            </div>
        </div>
  ) : '';
}


export default Popup