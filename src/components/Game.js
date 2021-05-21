import React, { useState } from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'

const styles = {
  width: '200px', 
  margin: '20px auto',
}

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXisNext] = useState(true)
  const winner = calculateWinner(history[stepNumber])

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber+1)
    const current = timeInHistory[stepNumber]
    const squares = [...current]
    
    // if user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return
    // put an X or an O in the clicked square
    squares[i] = xIsNext ? 'X' : 'O'
    setHistory([...timeInHistory, squares])
    setStepNumber(timeInHistory.length)
    setXisNext(!xIsNext)
  }

  const jumpTo = () => {

  }

  const renderMove = () => {
    return <button onClick={() => setBoard(Array(9).fill(null))}>
      Start Game
    </button>
  }

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>{winner ? 'Winner: ' + winner: 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
        {renderMove()}
      </div>
    </>
  )
}

export default Game