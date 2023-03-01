import { useEffect, useState } from "react"


export default function Set () {
  const [legoSets, setLegoSets] = useState([])
  const [loading, setLoading] = useState(false)

  const getLegoSets = async () => {
    try {
    const response = await fetch (`https://rebrickable.com/api/v3/lego/sets/?key=0ee20b8b38592fc91ada21d59a4c15b3`, {
      method: 'GET',
      header: {
        'Accept': 'application/json',
        'Authorization': 'key 0ee20b8b38592fc91ada21d59a4c15b3'
      }
    })
  const data = await response.json()
  setLegoSets(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getLegoSets()
  }, [])

  return (
    <main>
      <h1>Sets</h1>
      {legoSets.results ? (
        <ul className="sets">
          {
            legoSets.results.map((legoSet) => {
              return(
              <li key={legoSet.set_num}>
                <p>{legoSet.name}</p>
                <img src={legoSet.set_img_url} alt={legoSet.name} /> 
              </li>
              )
            })
          }
        </ul>
      ) 
    :
          <h1>Nothing to show</h1>
    }
    </main>
  )
}