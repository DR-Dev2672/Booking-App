import { BrowserRouter,Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './layout/Layout'
import Register from './Pages/Register'
import SignIn from './Pages/SignIn'




function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><p>Home Page</p></Layout>} />
      <Route path="/search-page" element={<Layout><p>Search Page</p></Layout>} />
      <Route path="/register" element={<Layout><Register/></Layout>} />
      <Route path="/sign-in" element={<Layout><SignIn/></Layout>} />

      
    </Routes>
    </BrowserRouter>
     
        
    </>
  )
}

export default App
