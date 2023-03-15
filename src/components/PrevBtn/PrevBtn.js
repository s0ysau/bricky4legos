import { useState } from "react"

export default function PrevBtn (props) {
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(10)

  // var currentPageNumber = props.pageNm
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