import squares from "./squares"
import { useEffect, useState } from "react"


const Box = () => {

  const [boxes, setBoxes] = useState(squares)
  const [player, setPlayer] = useState(false)
  const [markerValue, setMarkerValue] = useState('')

/*------- Loads and chooses user as first player ----------------- */
  useEffect(() => {
    // Chooses marker value depending on who is player
    player ? setMarkerValue('O') : setMarkerValue('X')
  }, [player])

/*--------------- Toggle between player and computer ----------------- */

  const toggle = (id) => {
    // Displays value based on square selected
    setBoxes(prevBoxes => prevBoxes.map(box => {
      return box.id === id ? { ...box, on: !box.on, value: markerValue } : box
    }))

// Alternates between player and computer
    setPlayer(() => !player)
  }

  return (
    <>
   { /* Maps and displays each square to screen*/}
      {boxes.map(box => {
        return <div key={box.id} className='box' onClick={() => toggle(box.id)}>
          {box.value}
        </div>
      })}
    </>
  );
}

export default Box;