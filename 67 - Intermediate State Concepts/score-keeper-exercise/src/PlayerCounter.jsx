import { useState } from "react";
import { v4 as uuid } from "uuid";




export default function PlayerCounter({ numPlayers, target }) {
    function generatePlayerCounters() {
        const initialPlayerCounters = new Array(numPlayers).fill({ points: 0 }).map(i => {
            return { ...i, id: uuid() }
        });
        return initialPlayerCounters;
    }
    const [PlayerCounters, setPlayerCounters] = useState(generatePlayerCounters);

    function addPoints(id) {
        setPlayerCounters(previousCounter => {
            return previousCounter.map(i => {
                if (i.id === id) {
                    return { ...i, points: i.points + 1 };
                }
                return i;
            });
        });
    }

    function reset() {
        setPlayerCounters(oldPlayer => { return generatePlayerCounters() })
    }

    console.log(PlayerCounters);
    return (
        <div>
            {PlayerCounters.map((i, index) => {
                return (
                    <div key={i.id}>Player{index}: {i.points}  <button onClick={() => addPoints(i.id)}>+1</button> {i.points >= target && <div>WINNER!</div>}</div>
                );
            })}
            <div onClick={reset}>Reset</div>
        </div>
    );
}