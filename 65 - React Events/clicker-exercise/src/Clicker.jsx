



export default function Clicker({message, buttonText}){
    function displayMessage(e) {
        e.preventDefault();
        alert(message)
    }   
    return(
    <button onClick={displayMessage}>
        {buttonText}
    </button>
    )   
}