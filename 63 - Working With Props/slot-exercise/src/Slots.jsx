export default function Slots({val1, val2, val3}){

const equal = (val1 === val2  && val2 === val3) ? true : false
const styles = {color: equal ? "green" : "red" };

return (
    <div>
        <p  >{val1} {val2} {val3}</p>
        <div style={styles} >{equal ? "You Win!" : "You Lose!"}</div>
        {equal && <div>Congrats!!!</div>}
    </div>   
)

}