import { useState } from "react"

export default function NextBtn (props) {
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(10)

  const handleNext = async () => {
    setPage((page) => page += 1)
    setSize(size)
    props.increaseSize(page, size)
  }

  return (
    <>
      <button onClick={handleNext} value={page}>Next</button>
    </>
  )
}