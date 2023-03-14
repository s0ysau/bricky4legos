import { useState } from 'react'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage'
import LandingPg from '../LandingPg/LandingPg';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <main className="App">
      <section>
        { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <LandingPg />
          <Footer />
        </>
          :
          <AuthPage setUser={setUser} />
        }
      </section>
    </main>
  );
}


