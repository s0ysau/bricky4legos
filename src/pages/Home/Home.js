import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Themes from "../Themes"
import Set from "../Set/Set"
import Theme2 from "../Theme2"
import '../Home/Home.css'

export default function Home () {


  return(
    <main className="HomeContainer">
      <h1>Home</h1>
      {/* <Themes/> */}
      {/* <Theme2/> */}
      <Set />
    </main>
  )
}