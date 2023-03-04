import { useEffect, useState } from "react"
import Themes from "../Themes"
import Set from "../Set"
import Theme2 from "../Theme2"


export default function Home () {


  return(
    <main className="Home">
      <h1>Main Page</h1>
      {/* <Theme2 /> */}
      {/* <Themes /> */}
      <Set />
    </main>
  )
}