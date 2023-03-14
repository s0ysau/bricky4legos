import { useEffect, useState } from "react"
import "../Set/Set.css"
import NextBtn from "../../components/NextBtn/NextBtn"
import PrevBtn from "../../components/PrevBtn/PrevBtn"

export default function Set () {
  const [legoSets, setLegoSets] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(null)
  

  const getLegoSets = async (page, size) => {
    try {
    const response = await fetch (`https://rebrickable.com/api/v3/lego/sets/?key=${process.env.REACT_APP_REBRICKABLE_API_KEY}&page=${page}&page_size=${size}`, {
      method: 'GET',
      header: {
        'Accept': 'application/json',
        'Authorization': `key ${process.env.REACT_APP_REBRICKABLE_API_KEY}`
      }
    })
  const data = await response.json()
  setLegoSets(data)
  setPage(page)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getLegoSets(1, 10)
  }, [])

  console.log(page)

  return (
    <main>
      <h1 class="text-3xl font-bold underline">Sets from rebrickable</h1>
      {legoSets.results ? (
        <ol className="sets">
          {
            legoSets.results.map((legoSet) => {
              return(
              <li key={legoSet.set_num}>
                <p>{legoSet.name}</p>
                <img src={legoSet.set_img_url} alt={legoSet.name} className='setImg'/> 
                <a href={legoSet.set_url}>Link</a>
              </li>
              )
            })
          }
        </ol>
      ) 
    :
      <h1>Nothing to show</h1>
    }
      <PrevBtn decreaseSize={getLegoSets} pageNm={page}/>
      <NextBtn increaseSize={getLegoSets}/>
    </main>
  )
}