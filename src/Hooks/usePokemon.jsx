import { useEffect, useState } from "react";
import {BaseUrl} from "../Constants/Constants.jsx";

export const usePokemon = () => {
    //pokemon main data
    const [pokemon, setPokemon] = useState([]);

    //Loading state
    const [loading,setloading]=useState(true)

    //error handle state
    const [error,seterror]=useState(null)

    //prev and next button
    const [nextUrl,setNextUrl]=useState(null)
    const [prevUrl,setPrevUrl]=useState(null)

    // search state
    const[search,setSearch]=useState("")

    //filter typeState
    const[selectedType,setSelectedType]=useState("all")

    //details view state
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const fetchPokemon = async (Url) => {
            try {
                setloading(true)
                seterror(null)

                const res = await fetch(Url);

                if(!res.ok){
                    throw new Error("Failed to fetch Pokemon");
                }
                const data = await res.json();

                setPrevUrl(data.previous)
                 setNextUrl(data.next)

                const detailed = await Promise.all(
                    data.results.map(async (p) => {
                        const res = await fetch(p.url);
                        return await res.json();
                    })
                );

                setPokemon(detailed);
            } catch (error) {
                console.error("Error fetching Pokémon:", error);
                seterror(error.message)
            }finally {
                setloading(false)
            }
        };

    useEffect(() => {
             fetchPokemon(BaseUrl);
    }, []);

    //filter
    const filteredData=pokemon.filter((item)=>{
        const matchesSearch=item.name.toLowerCase().includes(search.toLocaleLowerCase());

        const matchesType=selectedType==="all" || item.types.some(
            (t)=>t.type.name===selectedType
        )
        return matchesSearch && matchesType
    })


    return {
        filteredData,
        loading,
        error,
        prevUrl,
        nextUrl,
        search,
        setSearch,
        selectedType,
        setSelectedType,
        selectedPokemon,
        setSelectedPokemon,
        fetchPokemon
    };

};