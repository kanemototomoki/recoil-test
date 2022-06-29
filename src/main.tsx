import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import App from '@src/pages/App'

const container = document.getElementById('root')
const root = createRoot(container!)
const Fallback = () => {
  return <h1>フォールバックです！</h1>
}
root.render(
  <RecoilRoot>
    <Suspense fallback={<Fallback />}>
      <App />
    </Suspense>
  </RecoilRoot>
)
