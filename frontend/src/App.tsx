import { BrowserRouter,Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './layout/Layout'
import Register from './Pages/Register'
import SignIn from './Pages/SignIn'
import AddHotel from './Pages/AddHotel'
import { useAppContext } from './contexts/AppContext'
import MyHotel from './Pages/MyHotel'




function App() {
  
const {isLoggedIn}=useAppContext();
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><p>Home Page</p></Layout>} />
      <Route path="/search-page" element={<Layout><p>Search Page</p></Layout>} />
      <Route path="/register" element={<Layout><Register/></Layout>} />
      <Route path="/sign-in" element={<Layout><SignIn/></Layout>} />
      
        {isLoggedIn &&
        (
        <>
        <Route path="/add-hotel" element={<Layout><AddHotel/></Layout>} />
        <Route path="/my-hotels" element={<Layout><MyHotel/></Layout>} />
        </>
        )
        }
      
      

      
    </Routes>
    </BrowserRouter>
     
        
    </>
  )
}

export default App
