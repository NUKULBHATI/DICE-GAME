import React from 'react'
import './startpage.css'


const startpage = ({toggle}) => {
  return (
    <div className='maincontainer'>
      <div className='container'>
        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="fce5e0a76d3e531201ecd44ca61f9d27ff82e0ae.png" alt="" />
      </div>
      <div>
        <h1 className='heading'>Dice-Game</h1>
        <button className='btn' onClick={toggle}>Start Game</button>
      </div>
    </div>
  )
}

export default startpage
