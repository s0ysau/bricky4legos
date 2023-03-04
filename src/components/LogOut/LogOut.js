import { logOut } from '../../utilities/user-service'

export default function LogOut ({user, setUser}) {
  function handleClick () {
    logOut()
    setUser(null)
  }

  return (
    <section>
      <a href='/' onClick={handleClick}>LOG OUT</a>
    </section>
  )
}