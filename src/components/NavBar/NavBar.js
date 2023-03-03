import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Profile from "../../pages/Profile/Profile"
import "../NavBar/NavBar.css"
import Search from '../Search/Search'


export default function NavBar (){
  return (
    <section className="NavBarContainer">
        <Search />
        <Link path=''>HOME</Link>
        <Link path='/set'>SET</Link>
        <Link to='https://www.lego.com/en-us'>LEGO.COM</Link>
        <Link to='/profile' element={<Profile/>}>PROFILE</Link>
        <Link path='/logout'>LOG OUT</Link>
    </section>
  )
}