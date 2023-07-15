import { useState } from "react";
import "./Toggler.css";

export default function ToggleCounter() {

    const [isHappy, setisHappy] = useState(true);
    const [count, setCount] = useState(0);

    const toggleIsHappy = () => setisHappy(!isHappy);
    const incrementCount = () => setCount(count + 2);

    return (
        <div>
            <p className="Toggler" onClick={toggleIsHappy}>
                {isHappy ? "😊" : "😔"}
            </p>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
        </div>
    )

}