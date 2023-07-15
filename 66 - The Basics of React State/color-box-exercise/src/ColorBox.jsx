import { useState } from "react";
import "./ColorBox.css"

export default function ColorBox({colors}){
    function getRandomColor(){
        return colors[Math.floor(Math.random() * (colors.length))];
    }
    const [color, setColor] = useState(getRandomColor())
    const styles = {backgroundColor: color};

    function changeColor(){
        setColor(getRandomColor());
    }

    return(
        <div className="ColorBox" style={styles} onClick={changeColor}></div>
    );
}