import { useEffect, useState } from "react"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Themes from "../Themes"
import Set from "../Set"


export default function MainPage () {


  return(
    <main className="mainPage">
      <NavBar />
      <h1>Main Page</h1>
      <Themes />
      {/* <Set /> */}
      <Footer />
    </main>
  )
}