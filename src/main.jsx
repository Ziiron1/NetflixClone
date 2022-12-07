import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

/* Rotas */
import App from './App'
// import MovieSeries from './components/screens/MovieSeries'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/info/:type/:id" element={<MovieSeries />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)