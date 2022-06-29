import { atom, useRecoilState } from 'recoil'

// atom: Store
export const counterState = atom<number>({
  key: 'counter',
  default: 0,
})

export const useCounterSelect = () => {
  const [value, setCounter] = useRecoilState(counterState)
  return {
    counter: value,
    setCounter,
  }
}
