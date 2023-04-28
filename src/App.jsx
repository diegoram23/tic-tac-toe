import squares from "./squares"
import { useState } from "react"
import Box from "./Box"

function App() {
  const [boxes, setBoxes] = useState(squares)

  const toggle = (id) => {
    console.log(id)
    setBoxes(prevBoxes => {
      return prevBoxes.map(box => {
        return box.id === id ? { ...box, on: !box.on } : box
      })
    })

  }

  const boxElements = boxes.map(box => (
    <Box
      key={box.id}
      id={box.id}
      on={box.on}
      toggle={toggle}
    />
  ))

  return (
    <div className="app">

      <h2>Tic tac toe</h2>

      <main className="grid-box">
        {boxElements}
      </main>
    </div>
  )
}

export default App
