import { useState } from "react"

export default function PrevBtn (props) {
  const [page, setPage] = useState(props.pageNm)
  const [size, setSize] = useState(10)

  console.log(props.pageNm)

  const handlePrev = async () => {
      setPage((page) => page -= 1)
      setSize(size)
      props.decreaseSize(page, size)
  }

  return (
    <>
      <button onClick={handlePrev} value={page}>Previous</button>
    </>
  )
}