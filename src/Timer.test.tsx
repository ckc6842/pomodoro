import React from 'react'
import { render } from '@testing-library/react'
import Timer from './Timer'

test.each`
  input
  ${0}
  ${100}
  ${10000}
`('Timer의 남은 시간을 입력한 값 $input으로 초기화한다.', ({ input }) => {
  const { container } = render(<Timer remainTime={input} />)
  expect(container.textContent).toBe((input).toString())
})
