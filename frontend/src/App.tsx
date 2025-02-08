import { BrowserRouter,Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './layout/Layout'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout></Layout>} />

      
    </Routes>
    </BrowserRouter>
     
        
    </>
  )
}

export default App
