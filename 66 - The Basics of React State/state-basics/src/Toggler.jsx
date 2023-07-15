import { useState } from "react";
import "./Toggler.css";

export default function Toggler(){

    const [isHappy, setisHappy] = useState(true);
    const toggleIsHappy = () => setisHappy(!isHappy)

    return (
    <p className="Toggler" onClick={toggleIsHappy}>
       {isHappy ? "😊" : "😔" }
    </p>
    )

}