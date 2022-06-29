import { FC, memo } from 'react'

type Props = {
  text: string
  onClick?: () => {} | void
}

const Button: FC<Props> = (props) => {
  const { text, onClick } = props
  console.log(`render: button ${text}`)
  return <button onClick={onClick}>{text}</button>
}

export default memo(Button)
