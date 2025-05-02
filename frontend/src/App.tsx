import { BrowserRouter,Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './layout/Layout'
import Register from './Pages/Register'
import SignIn from './Pages/SignIn'
import AddHotel from './Pages/AddHotel'
import { useAppContext } from './contexts/AppContext'
import MyHotel from './Pages/MyHotel'
import EditHotel from './Pages/EditHotel'
import Search from './Pages/Search'
import Details from './Pages/Details'
import Booking from './Pages/Booking'





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

        <Route path="/search" element={<Layout><Search/></Layout>} />
        <Route path="/hotel/:hotelId/booking" element={<Layout><Booking/></Layout>} />
        <Route path="/add-hotel" element={<Layout><AddHotel/></Layout>} />
        <Route path="/edit-hotel/:hotelId" element={<Layout><EditHotel/></Layout>} />
        <Route path="/my-hotels" element={<Layout><MyHotel/></Layout>} />
        <Route path="/detail/:hotelId" element={<Layout><Details/></Layout>} />
        </>
        )
        }
      
      

      
    </Routes>
    </BrowserRouter>
     
        
    </>
  )
}

export default App
