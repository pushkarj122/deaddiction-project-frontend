import React from 'react'
import SearchNavbar from "../components/Navbar";
import SearchBar from './components/SearchPage/SearchBar';
import SearchCard from './components/SearchPage/SearchCard';
import SearchFooter from '../components/Footer';
const SearchPage = () => {
  return (
    <>
        <SearchNavbar/>
        <SearchBar/>
        <SearchCard/>
        <SearchFooter/>
    </>
  )
}

export default SearchPage
