import React from 'react';

interface TimerProps {
  remainTime: number,
}

const Timer: React.FunctionComponent<TimerProps> = (props: TimerProps) => {
  return <>{props.remainTime}</>
}

export default Timer