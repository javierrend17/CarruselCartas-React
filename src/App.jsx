import './App.css'
import { Card } from './components/Card'
import { createContext, useState } from 'react'
import { Indicator } from './components/indicator/Indicator';

export const MyContext = createContext();

function App(){
  
  const [moveCount, setMoveCount] = useState(0);
  
  

  const handleMoveRight = () =>{
    if (moveCount < 4){
      setMoveCount(moveCount + 1);  
    }
  }

  const handleMoveLeft = () =>{
    if (moveCount > -4){
      setMoveCount(moveCount - 1);  
    }
  }

  const moveAmount = 422;

  return (
    <MyContext.Provider value={moveCount}>
      <div className='todo'>
        <h1>Esta es una prueba para hacer un carrusel</h1>
        <div className='carruselContainer'>

          <div className='carrusel'>

            <div className='arrow left'>
              <div className='arrowBox' onClick={handleMoveRight}>
                <div className='line line1'></div>
                <div className='line line2'></div>
              </div>
            </div>

            <div className='arrow right'>
              <div className='arrowBox' onClick={handleMoveLeft}>
                <div className='line line1'></div>
                <div className='line line2'></div>
              </div>
            </div>

            <div className='cards' style={{ transform: `translateX(${moveCount * moveAmount}px)` }}>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>

          </div>
          
        </div>

        <Indicator></Indicator>

      </div>
    </MyContext.Provider>
    
  )
}

export default App
