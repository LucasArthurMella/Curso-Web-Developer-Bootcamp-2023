import { useState } from "react"
import "./Box.css"




export default function Box({isActive, clickFunc}){

    return <div onClick={clickFunc} className="Box" style={{backgroundColor: isActive ? "red" : "black"}}></div>
}