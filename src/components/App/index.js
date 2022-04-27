import './App.css'
import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '../../routes/index'

function App() {
  const renderedRoutes = useRoutes(routes)

  return <div className="App">{renderedRoutes}</div>
}

export default App
