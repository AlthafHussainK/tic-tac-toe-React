import React from 'react'
import Sqaure from './Square'

const style = {
  border: '4px solid darkblue',
  borderRadius: '10px',
  width: '250px',
  height: '250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({ squares, onClick }) => (
  <div style={style}>
    <Sqaure value="1" onClick={() => onClick("dummy")} />
    <Sqaure value="2" onClick={() => onClick("dummy")} />
    <Sqaure value="3" onClick={() => onClick("dummy")} />
    <Sqaure value="4" onClick={() => onClick("dummy")} />
    <Sqaure value="5" onClick={() => onClick("dummy")} />
    <Sqaure value="6" onClick={() => onClick("dummy")} />
    <Sqaure value="7" onClick={() => onClick("dummy")} />
    <Sqaure value="8" onClick={() => onClick("dummy")} />
    <Sqaure value="9" onClick={() => onClick("dummy")} />
  </div>
)

export default Board