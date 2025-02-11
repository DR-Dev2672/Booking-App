import { BrowserRouter,Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './layout/Layout'




function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><p>Home Page</p></Layout>} />
      <Route path="/search-page" element={<Layout><p>Search Page</p></Layout>} />

      
    </Routes>
    </BrowserRouter>
     
        
    </>
  )
}

export default App
