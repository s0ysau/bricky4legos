import { useEffect, useState } from "react"

export default function Themes () {
  const [themes, setThemes] = useState([])
  const [loading, setLoading] = useState(false)

  const getThemes = async () => {
  try {
    const response = await fetch (`https://rebrickable.com/api/v3/lego/themes/?key=0ee20b8b38592fc91ada21d59a4c15b3`, {
      method: 'GET',
      header: {
        'Accept': 'application/json',
        'Authorization': 'key 0ee20b8b38592fc91ada21d59a4c15b3'
      }
    })
    const data = await response.json()
    setThemes(data)
  } catch (error) {
    console.error(error)
  }
}

  useEffect(() => {
    setLoading(true)
    getThemes()
  }, [])

  return(
    <main className="themeContainer">
      <h1>Themes</h1>
      {themes.results ? (
      <ul className="theme">
        {
          themes.results.map((theme) => {
            return (
              <li key={theme.id}>{theme.name}</li>
            )
          })
        }
      </ul>
      ) 
      : 
        <h1>nothing to show</h1>
      }
    </main>
  )
}