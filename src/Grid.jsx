import { useState } from "react";
import squares from "./squares"


const Grid = () => {

    const [boxes, setBoxes] = useState(squares)
    
    const boxElements = boxes.map(box => {
        return <div key={box.id} className='box'>
        </div>
    })

    return (
        <div className="grid-box">
            {boxElements}
        </div>
    );
}

export default Grid;