import React, { useState } from 'react'
import Button from '../Button/Button'
import TimeTable from '../TimeTable/TimeTable'
import './Timer.scss'

const Timer = () => {
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
    setStartButtonLabel('Start')
  }

  // Main loop.
  if (started) {
    setTimeout(
      () => setSeconds(seconds + 1),
      1000
    )
    if (seconds > 59) {
      setMinutes(minutes + 1)
      setSeconds(0)
    }
    if (minutes > 59) {
      setHours(hours + 1)
      setSeconds(0)
      setMinutes(0)
    }
  }

  return (
    <div className={'Timer'}>
      <h2>Timer</h2>
      <TimeTable
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
  )
}

export default Timer