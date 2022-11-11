import Container from "../components/container"
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [showPlayer, setShowPlayer] = useState(false)
  
  return (
    <div>
      <button
        type="button"
        onClick={() => setShowPlayer(true)}
        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Show Container
      </button>
      <Container
        showPlayer={showPlayer}
        onClosePlayer={() => setShowPlayer(false)}
      />
    </div>
  )
}
