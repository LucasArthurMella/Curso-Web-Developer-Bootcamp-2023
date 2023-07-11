export default function ColorList({ colors }) {
    // const elements = [<p>Hello!</p>, <h1>Bye!</h1>, <input type="password"/>]


    return (
        <div>
            <p>Color List</p>
            <ul>{colors.map(c =>
                <li style={{color: c}}>{c}</li>
            )}</ul>
        </div>
    )
}