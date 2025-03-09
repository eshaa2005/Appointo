import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Bankers from './pages/Bankers'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
//import { ContainerWithChildren } from 'postcss/lib/container'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Header from './components/Header'
import SpecialityMenu from './components/SpecialityMenu'
import TopBankers from './components/TopBankers'
import Banner from './components/Banner'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SpecialityMenu />
      <TopBankers />
      <Banner />
      <Footer />
      <h1 style={{ color: "blue" }}>Hello from App</h1>
    </div>
  );
};

export default App;

// const App = () => {
//   return (
//     <div className='mx-4 sm:mx-[10%]'>
//       <Navbar>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/Bankers' element={<Bankers />} />
//         <Route path='/Bankers/:speciality' element={<Bankers />} />
//         <Route path='/Login' element={<Login />} />
//         <Route path='/About' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/My-Profile' element={<MyProfile />} />
//         <Route path='/My-Appointments' element={<MyAppointments />} />
//         <Route path='/Appointment/:bankId' element={<Appointment />} />

//       </Routes>
//       </Navbar>
//     </div>
//   )
// }

// export default App
