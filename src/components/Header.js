import React from 'react';

import iconShield from '../icons/shield.svg'

import './header.css'

export const Header = () => {
  return (
    <header>
      <div className="recording-container">
        <img className="icon-16" src={iconShield}/>
        <div className="recording-dot"></div>
        <p>Recording</p>
      </div>

    </header>
  )
}