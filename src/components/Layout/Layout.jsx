

export function Layout({data}){
    let title = ""
    let properties = []
    switch (data?.type) {
        case "people":
            title = data.resource.name
            properties = [`Height: ${data.resource.height}`, `Mass: ${data.resource.mass}`, `Hair color: ${data.resource.hair_color}`, `Birth Year: ${data.resource.birth_year}`, `Homeworld: ${data.homeworld}`,]
            break;
        case "films":
            title = data.resource.title
            properties = [`Director: ${data.resource.director}`, `Producer: ${data.resource.producer}`, `Release Date: ${data.resource.release_date}`, `Opening Crawl: ${data.resource.opening_crawl}`]
            break;
        case "starships":
            title = data.resource.name
            properties = [`Model: ${data.resource.model}`,`Manufacturer: ${data.resource.manufacturer}`,`Cost in credits: ${data.resource.cost_in_credits}`,`Length: ${data.resource.length}`,`Max atmosphering speed: ${data.resource.max_atmosphering_speed}`]
            break;
        case "vehicles":
            title = data.resource.name
            properties = [`Model: ${data.resource.model}`,`Manufacturer: ${data.resource.manufacturer}`,`Cost in credits: ${data.resource.cost_in_credits}`,`Length: ${data.resource.length}`,`Max atmosphering speed: ${data.resource.max_atmosphering_speed}`]
            break;
        case "species":
            title = data.resource.name
            properties = [`Classification: ${data.resource.classification}`,`Designation: ${data.resource.designation}`,`Average Height: ${data.resource.average_height}`,`Average Lifespan: ${data.resource.average_lifespan}`,`Language: ${data.resource.language}`]
            break;
        case "planets":
            title = data.resource.name
            properties = [`Rotation Period: ${data.resource.rotation_period}`,`Orbital Period: ${data.resource.orbital_period}`,`Diameter: ${data.resource.diameter}`,`Climate: ${data.resource.climate}`,`Gravity: ${data.resource.gravity}`, `Terrain: ${data.resource.terrain}`]
            break;
        default:
            title = "Unknown Resource"
            break;
    }
    return data === "error"
    ?<>
        <h1>Estos no son los droides que está buscando</h1>
        <img 
            src="https://fotografias.larazon.es/clipping/cmsimages01/2021/03/29/FDDECA4B-2E53-4E95-9206-AA8E8659076E/98.jpg?crop=640,360,x0,y6&width=1900&height=1069&optimize=low&format=webply" 
            alt="Obi-WanKenobi" 
            className="img-obiwan"
        />
    </>
    :<>
        {data && (
            <div>
                <h1>{title}</h1>
                {properties.map((element, index) =>(
                    <p key={index}>{element}</p>
                ))}
            </div>
        )}
    </>
}