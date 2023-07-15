import { useState } from "react"
import { v4 as uuid} from "uuid";



export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id: uuid(), emoji:"😖"}]);
    const addEmoji = () => {
        
        setEmojis(oldEmojis => {
            return [...oldEmojis, {id: uuid(), emoji:"😖"}]
        });
    }
    const deleteEmoji = (id) => {
        setEmojis(oldEmojis => oldEmojis.filter(e => e.id !== id));
    }
    const makeEverythingAHeart = () => {
        setEmojis(prevEmojis => {
            return prevEmojis.map(
                e => {return {...e, emoji: "<3"}}
            )
        })
    }

    return (
        <div>
            {emojis.map(e => (
                <span onClick={() => {deleteEmoji(e.id)}} key={e.id} style={{fontSize: "4rem", cursor:"pointer"}}>
                    {e.emoji}
                </span> 
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeEverythingAHeart}>Make them all hearts</button>
        </div>
    )
}