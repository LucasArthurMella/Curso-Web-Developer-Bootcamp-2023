import { useState } from "react";
import Box from "./Box";





export default function BoxGrid({numBoxes = 9}){

    const [boxes, setBoxes] = useState(new Array(numBoxes).fill(false));
    const reset = () => { 
        setBoxes(curBox => curBox.map(b => false)) 
    };

    const toggleBox = (idx) =>{
        setBoxes(old => 
            (
                old.map((value, i) => {
                    if(i === idx){
                        return !value;
                    } else {
                        return value;
                    }
                }) 
            )
        )
    }

    return (
        <div className="BoxGrid">
            {boxes.map((b,i) => 
            (<Box clickFunc={() => toggleBox(i)} key={i} isActive={b}/>)
            )}
            <button onClick={reset} >Reset</button>
        </div>
    );
}