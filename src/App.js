import React from 'react'

import { Card } from './components/Card'
import { Header } from './components/Header'

import maksSound from './audio/maks.mp3'
import poyaSound from './audio/poya.mp3'
import vanSound from './audio/van2.mp3'
import maksVideo from './video/maks.mp4'
import poyaVideo from './video/poya.mp4'
import vanVideo from './video/van.mp4'

export const App = () => {

  return (
    <>
      <Header/>
      <main>
        <div className="cards">
          <Card
            person="Maks"
            sound={maksSound}
            video={maksVideo}
          />
          <Card
            person="Poya"
            sound={poyaSound}
            video={poyaVideo}
          />
          <Card
            person="Van"
            sound={vanSound}
            video={vanVideo}
          />
          {/* <Card
            person="Fourth"
          /> */}
        </div>
      </main>
      {/* <footer>Footer</footer> */}
    </>
  )
}
