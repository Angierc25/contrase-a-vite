import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordForm from './screens/views/PasswordForm'
import EmailProvider from './screens/context/email/EmailProvider'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <EmailProvider>
        <PasswordForm />
      </EmailProvider>
    </Router>


  )
}

export default App
