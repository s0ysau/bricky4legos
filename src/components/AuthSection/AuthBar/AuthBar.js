import { Link } from 'react-router-dom'
import Search from "../../Search/Search";
import '../AuthBar/AuthBar.css'

export default function AuthBar () {
  return (
    <section className="AuthBarContainer">
      <Search />
      <section className="AuthLinkSection">
        <Link to=''>LOG IN</Link>&nbsp;
        <Link to=''>SIGN IN</Link>
      </section>
    </section>
  )
}