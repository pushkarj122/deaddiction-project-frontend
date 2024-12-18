import React from 'react'
import Navbar from '../components/Navbar'
import ProfileCard from './components/profilepage/ProfileCard'
import ProfileDescription from './components/profilepage/ProfileDescription'
import ProfileSpecializations from './components/profilepage/ProfileSpecializations'
import Footer from '../components/Footer'
import ProfileProgram from './components/profilepage/ProfileProgram'
import ProfileApproach from './components/profilepage/ProfileApproach'
const Profilepage = () => {
  return (
    <>
    <Navbar/>
    <ProfileCard/>
    <ProfileDescription/>
    <ProfileSpecializations/>
    <ProfileProgram/>
    <ProfileApproach/>
    <Footer/>
    </>
  )
}

export default Profilepage
