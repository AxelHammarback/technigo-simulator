import React from 'react'

import useSound from 'use-sound'
import iconMute from '../icons/mute.svg'

export const Card = (props) => {

  const handleClick = () => {
    // Prevents it from spamming sounds
    if(isPlaying) {
    } else {
      play()
    }
  }

  const [play, { isPlaying }] = useSound(props.sound)

  return (
    <>
      <div className="card">
        <button className="button-invisible" onClick={handleClick}>
          {isPlaying ? console.log("Audio isn't playing") : <span className="span-unmute">Unmute</span>}
        </button>

        <video className="background-video" loop muted autoPlay>
          <source src={props.video} type="video/mp4"></source>
        </video>
        <div className="label-name">
          {isPlaying ? console.log("Audio is playing") : <img className="icon-16" src={iconMute}></img>}
          {props.person}
        </div>

      </div>
    </>
  )
}