import React from 'react'
import Routess from './routes/routes'
import { AuthProvider } from './utils/auth';
import './App.css'

function App() {
  
  return (
    <>
    <AuthProvider>
      <Routess/>
    </AuthProvider>

    </>
  )
}

export default App
