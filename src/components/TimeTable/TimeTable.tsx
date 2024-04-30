import React from 'react'
import './TimeTable.scss'

interface TimeTableProps {
  hours: number,
  minutes: number,
  seconds: number
}

const TimeTable = ({
  hours,
  minutes,
  seconds
}: TimeTableProps) => {

  const formatTime = ( time : number ) => time > 9 ? time : "0" + time

  return (
    <div className={'TimeTable'}>
      <p className={'Unit'}>{formatTime(hours)}</p>:
      <p className={'Unit'}>{formatTime(minutes)}</p>:
      <p className={'Unit'}>{formatTime(seconds)}</p>
    </div>
  )
}

export default TimeTable