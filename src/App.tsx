import { useState } from 'react'
import Button from './components/Button/Button'
import Timer from './components/Timer/Timer'

const App = () => {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [started, setStarted] = useState(false)
  const [startButtonLabel, setStartButtonLabel] = useState<string>('Start')

  const start = () => {
    setStarted(true)
    setStartButtonLabel('Start')
  }

  const pause = () => {
    if (started) {
      setStarted(false)
      setStartButtonLabel('Continue')
    }
  }

  const reset = () => {
    setStarted(false)
    setHours(0)
    setMinutes(0)
    setSeconds(0)
  }

  // Main loop.
  if (started) {
    setTimeout(
      () => setSeconds(seconds + 1),
      1000
    )
    if (seconds > 59) {
      setSeconds(0)
      setMinutes(minutes + 1)
    }
    if (minutes > 59) {
      setSeconds(0)
      setMinutes(0)
      setHours(hours + 1)
    }
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
          label={startButtonLabel}
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
