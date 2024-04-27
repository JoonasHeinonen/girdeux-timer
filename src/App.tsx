import { useState } from 'react'
import Button from './components/Button/Button'
import Timer from './components/Timer/Timer'

const App = () => {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const start = () => {
    // TODO Implement start functionality here
    console.log('Start')
  }

  const pause = () => {
    // TODO Implement pause functionality here
    console.log('Pause')
  }

  const reset = () => {
    setHours(0)
    setMinutes(0)
    setSeconds(0)
  }

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <Timer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <Button 
          handleClick={() => start()}
          label={'Start'}
        />
        <Button 
          handleClick={() => pause()}
          label={'Pause'}
        />
        <Button 
          handleClick={() => reset()}
          label={'Reset'}
        />
      </div>
    </>
  )
}

export default App
