
import { useState, useEffect, useRef } from 'react'
import TestCard from '../components/testCard'

export default function Home() {
  
  return (
    <main>
      <div className="max-w-3xl mx-auto py-6 px-1 sm:px-6 lg:px-8">
          <TestCard />
      </div>
      <div>
        I am currently getting a hydration error that I am totally stumped by that is also causing a blue line to appear just after this div, in addition to at the end of the card above:
      </div>
    </main>
  )
}
