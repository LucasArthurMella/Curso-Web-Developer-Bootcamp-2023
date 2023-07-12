

export default function Property({ name, rating, price }) {
    return (
    <div>
        <div>{name}</div>
        <div>${price} a night</div>
        <div>{rating} Star</div>
    </div>
    )
}