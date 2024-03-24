import { useState } from "react";
import { Layout } from "../components/Layout/Layout"
import { SearchForm } from "../components/SearchForm/SearchForm"
import 'bootstrap/dist/css/bootstrap.min.css';
export function Home(){
    const [data, setData] = useState(null)
    const updateData = (newData) => {
        setData(newData)
    }
    return <>
        <SearchForm updateData={updateData}/>
        <Layout data={data}/>
    </>
}