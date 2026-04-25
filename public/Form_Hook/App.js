import React from 'react'
import Form from './components/Form';
import TablePage from './components/Table';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </Router>
  )
}

export default App
