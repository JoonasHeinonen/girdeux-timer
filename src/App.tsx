import { useState } from 'react'
import Timer from './components/Timer/Timer'
import React from 'react'
import './App.scss'
import Button from './components/Button/Button'
import Header from './components/Header/Header'

const App = () => {
  const [timers, setTimers] = useState([])
  const [timerId, setTimerId] = useState(0)

  const AddNewTimer = () => {
    setTimerId(timerId + 1)
    setTimers([
    ...timers,
    { id: timerId }
  ])}

  const RemoveLatestTimer = () => {
    setTimerId(timerId - 1)
    setTimers(timers.slice(0, -1))
  }

  console.log(timerId)
  console.log(timers)

  return (
    <>
      <div className={'App'}>
        <Header header={'GIRDEUX TIMER'} />
        <div className={'Timers'}>
          {timers.map(timer => 
            <Timer key={timer.id} />
          )}
        </div>
        <div>
          <Button 
            handleClick={() => AddNewTimer()}
            label={'+'}
          />
          <Button 
            handleClick={() => RemoveLatestTimer()}
            label={'-'}
          />
        </div>
      </div>
    </>
  )
}

export default App
