import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import { Header } from './components';
import { Feed, VideoPage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#0F0F0F'}}>
        <Header />
        <Routes>
          <Route path='/' exact element={ <Feed /> } />
          <Route path='/video/:id' exact element={ <VideoPage /> } />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App