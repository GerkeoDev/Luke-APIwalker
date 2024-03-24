import { useEffect , useState} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
export function PeopleDetails(){
    const {id} = useParams()
    const [data, setData] = useState(null)
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response.data, response.status)
                setData(response.data)
                axios.get(response.data.homeworld)
                    .then(response => {
                        setData(data =>({
                            ...data,
                            homeworld: response.data.name
                        }))
                    })
                    .catch(error=>{setData(data =>({...data, homeworld: "unknown"}))})
            })
            .catch(error => {
                console.error(error)
            })
    }, [id])
    return data===null
    ?<>
        <h1>Estos no son los droides que está buscando</h1>
        <img src="https://fotografias.larazon.es/clipping/cmsimages01/2021/03/29/FDDECA4B-2E53-4E95-9206-AA8E8659076E/98.jpg?crop=640,360,x0,y6&width=1900&height=1069&optimize=low&format=webply" 
        alt="Obi-WanKenobi"
        className="img-obiwan" />
    </>
    :<>
        <h1>{data.name}</h1>
        <p>ID: {id}</p>
        <p>Hair Color: {data.hair_color}</p>
        <p>Height: {data.height}</p>
        <p>Mass: {data.mass}</p>
        <p>Eye Color: {data.eye_color}</p>
        <p>Birth Year: {data.birth_year}</p>
        <p>Homeworld: {data.homeworld}</p>
    </>
}