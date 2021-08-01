import React, { useState } from 'react'

const App = () => {
  /* const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0) */

  const [ clicks, setClicks ] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })

  return (
    <>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
    </>
  )
}

/* const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
    <button 
        onClick={onClick}
      >
        {text}
    </button>
) */

export default App