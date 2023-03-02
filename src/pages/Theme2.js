import { useEffect, useState } from "react"

export default function Theme2 () {
  const [themes, setThemes] = useState([])
  const [loading, setLoading] = useState(false)

  const getThemes = async () => {
    try {
      const response = await fetch (`https://www.brickset.com/api/v3.asmx/getThemes?apiKey=3-1zW4-35oj-S6ryU` , {
        method: 'GET', 
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': '5',
          'apiKey': '3-1zW4-35oj-S6ryU'
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

  return (
    <section>
      <h1>Theme from Brickset</h1>
      {
        themes ? (
          <ul>
            {
              themes.map((theme) => {
                return (
                  <p>{theme.theme}</p>
                )
              })
            }
          </ul>
        )
        :
        <h1>Nothing to Show</h1>
      }
    </section>
  )
}