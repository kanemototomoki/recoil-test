import { FC, memo, useCallback } from 'react'
import { useCounterSelect } from '@src/store/atoms/counter'
import Button from '@src/components/atoms/Button'

type Props = {}
const Counter: FC<Props> = () => {
  const { counter, setCounter } = useCounterSelect()

  const increment = useCallback(() => {
    setCounter((prev) => prev + 1)
  }, [])

  const decrement = useCallback(() => {
    setCounter((prev) => prev - 1)
  }, [])

  console.log('render: counter')
  return (
    <div>
      <p>counter: {counter}</p>
      <Button key="increment" onClick={increment} text={'+'} />
      <Button key="decrement" onClick={decrement} text={'-'} />
    </div>
  )
}

export default memo(Counter)
