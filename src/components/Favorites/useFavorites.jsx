import {useState,useEffect} from "react";


export const useFavorites=()=>{
    const[favorites,setFavorites]=useState(()=>{
        const saved =localStorage.getItem("favorites")
        return saved ? JSON.parse(saved):[]
    })

    useEffect(() => {
        localStorage.setItem("favorites",JSON.stringify(favorites))
    }, [favorites]);

    const toggleFavorite=(pokemon)=>{
        setFavorites((prev)=>{
            const exists=prev.some((p)=>p.id===pokemon.id);

            if(exists){
                return prev.filter((p)=>p.id !==pokemon.id)
            }else {
                return [...prev,pokemon]
            }
        })
    }

    return{favorites,toggleFavorite}
}