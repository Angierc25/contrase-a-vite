import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordForm from './screens/views/PasswordForm'
import EmailProvider from './screens/context/email/EmailProvider'

function App() {

  return (
  <EmailProvider>
    <PasswordForm/>
  </EmailProvider>
    
  )
}

export default App
