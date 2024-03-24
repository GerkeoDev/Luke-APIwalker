import { useState } from "react"
import axios from "axios"

export function SearchForm({updateData}){
    const [selectedResource, setSelectedResource] = useState("people")
    const [selectedId, setSelectedId] = useState("1")
    const handleChangeSelect = (e) => {
        setSelectedResource(e.target.value)
    }
    const handleChangeId = (e) => {
        setSelectedId(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://swapi.dev/api/${selectedResource}/${selectedId}`)
            .then(response => {
                console.log(response.data, response.status)
                const result = response.data
                console.log("es un", selectedResource)
                if(selectedResource==="people"){
                    axios.get(response.data.homeworld)
                        .then(response => {updateData({resource: result, type: selectedResource, homeworld: response.data.name})})
                        .catch(error=>{updateData({resource: result, type: selectedResource, homeworld: "unknown"})})
                }else{
                    updateData({resource: response.data, type: selectedResource})
                }
            })
            .catch(error=> {
                console.error(error)
                updateData("error")
            })
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <span>
                    <span>Search for: </span>
                    <select name="select" id="select" onChange={handleChangeSelect} value={selectedResource}>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="planets">Planets</option>
                    </select>
                </span>
                <span>
                    <span>Id </span>
                    <input type="text" name="id" onChange={handleChangeId} value={selectedId}/>
                    <input type="submit" value={"Search"}/>
                </span>
            </form>
        </>
    )
}