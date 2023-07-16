


import { useState } from "react"


export default function UsernameForm(){
    const [username, setUserName] = useState("timmy");
    const updateUsername = (evt) => {
        console.log("CHANGE EVENT!!!");
        setUserName(evt.target.value);
    };
    return (
        <div>
        <label htmlFor="username" >Enter a username</label>
            <input type="text" placeholder="username" value={username} 
            onChange={updateUsername} id="username"/>

            <button>Submit</button>
        </div>
    )
}