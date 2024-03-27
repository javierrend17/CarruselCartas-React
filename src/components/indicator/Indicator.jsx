import { useContext } from 'react'
import { MyContext } from '../../App'
import './Indicator.css'

export const Indicator = () => {

    const value = useContext(MyContext);

  return (
    <div className='indicator'>
        
        <div className={`i ${value === 4 ? 'color' : ''}`}></div>
        <div className={`i ${value === 3 ? 'color' : ''}`}></div>
        <div className={`i ${value === 2 ? 'color' : ''}`}></div>
        <div className={`i ${value === 1 ? 'color' : ''}`}></div>
        <div className={`i ${value === 0 ? 'color' : ''}`}></div>
        <div className={`i ${value === -1 ? 'color' : ''}`}></div>
        <div className={`i ${value === -2 ? 'color' : ''}`}></div>
        <div className={`i ${value === -3 ? 'color' : ''}`}></div>
        <div className={`i ${value === -4 ? 'color' : ''}`}></div>

    </div>    
  )
}
