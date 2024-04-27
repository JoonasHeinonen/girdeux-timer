import React from "react"

interface TimerProps {
  hours: number,
  minutes: number,
  seconds: number
}

const Timer = ({
  hours,
  minutes,
  seconds
}: TimerProps) => {

  const formatTime = ( time : number ) => {
    return time > 9 ? time : "0" + time
  }

  return (
    <div>
      <p>{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</p>
    </div>
  )
}

export default Timer