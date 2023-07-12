import Property from "./Property"

export default function PropertyList( {properties} ){
    return(
    <div className="d-flex justify-content-center">
        {properties.map(i => (
            <Property 
                key={i.id}
                {...i}
            />
        ))}
    </div>
    )
}