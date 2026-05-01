import {motion} from "framer-motion";

const FavoritesButton=({pokemon,favorites,toggleFavorites})=>{

    const isFav=favorites.some((f)=>f.id===pokemon.id)

    return(
        //
        <motion.button
        onClick={()=>toggleFavorites(pokemon)}
        whileTap={{scale:1.4}}
        transition={{type:"spring",stiffness:400,damping:15}}
        className="text-2xl">
            {isFav ? "❤️" : "🤍"}
        </motion.button>
    )
}

export default FavoritesButton