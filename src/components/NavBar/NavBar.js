import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Profile from "../../pages/Profile/Profile"
import LogOut from '../LogOut/LogOut'
import "../NavBar/NavBar.css"
import Search from '../Search/Search'


export default function NavBar ({user, setUser}){
  return (
    <section className="NavBarContainer">
      <Search />
      <Link path=''>HOME</Link>
      <Link to='/wishlist'>WISHLIST</Link>
      <Link to='/cart'>CART</Link>
      <Link to='https://www.lego.com/en-us'>LEGO.COM</Link>
      <Link to='/profile' element={<Profile user={user} setUser={setUser}/>}>PROFILE</Link>
      <LogOut user={user} setUser={setUser}/>
    </section>
  )
}