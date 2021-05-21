import React, { useState } from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(true)
  const winner = calculateWinner(board)

  const handleClick = () => {

  }

  const jumpTo = () => {

  }

  return (
    <Board squares={board} onClick={handleClick} />
  )
}

export default Game