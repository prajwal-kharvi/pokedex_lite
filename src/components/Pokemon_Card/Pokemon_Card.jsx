import {usePokemon} from "../../Hooks/usePokemon.jsx";
import {pokemon_types} from "../../Constants/Constants.jsx";
import {useFavorites} from "../Favorites/useFavorites.jsx";
import FavoritesButton from "../Favorites/favoritesButton.jsx";
import PokemonModal from "../PokemonModal/PokemonModal.jsx";
import Shimmer_Ui from "../Shimmer_UI/Shimmer_Ui.jsx";
import Error from "../Error/Error.jsx";
import image from "/src/assets/pokemon.png"

const Pokemon_Card=()=>{

    //d
    const {filteredData,
        loading,
        error,
        prevUrl,
        nextUrl,
        fetchPokemon,
        search,
        setSearch,
        selectedType,
        setSelectedType,
        setSelectedPokemon,
        selectedPokemon}=usePokemon()
    console.log(filteredData)

    //favorites destructing
    const {favorites,toggleFavorite}=useFavorites()

    //shimmer loading show
    if(loading){
        return <Shimmer_Ui/>
    }

    //error loading or error message
    if(error){
        return <Error onRetry={fetchPokemon()}/>
    }

     return(
         <div className="w-full h-auto  p-16">
             {/*search */}
             <div className="flex gap-4 items-center mb-10 -mt-10">
                 <input type="text"
                        placeholder="Search Pokemon..."
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        className=" p-4 w-1/2 rounded-2xl bg-white outline-none"/>
             {/*type filter  dropdown*/}
                 <select
                 value={selectedType}
                 onChange={(e)=>setSelectedType(e.target.value)}
                 className="p-4 rounded-2xl bg-white  outline-none">
                     {pokemon_types.map((type) => (
                         <option key={type} value={type}>
                             {type.toUpperCase()}
                         </option>
                     ))}
                 </select>
             </div>


             {/*{Pokemon card ui}*/}
             <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                 {filteredData.length===0 ?(
                     // error handling for search and filter
                     <div className="col-span-full flex flex-col items-center justify-center mt-10 text-gray-600 text-center">
                         <p className="text-lg font-semibold">No Pokémon Found</p>
                         <p className="text-sm">Try a different search or filter</p>
                     </div>
                 ):(filteredData.map((p)=>(

                     <div  key={p.id}
                           onClick={()=>setSelectedPokemon(p)}
                           className="relative   bg-gradient-to-br from-yellow-100 to-orange-200 p-6 rounded-2xl shadow-md text-center cursor-pointer hover:scale-105 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
                     >

                         {/* Heart Button */}
                         <div className="absolute top-2 right-4"
                         onClick={(e)=>e.stopPropagation()}>
                             <FavoritesButton
                                 pokemon={p}
                                 favorites={favorites}
                                 toggleFavorites={toggleFavorite}
                             />
                         </div>
                         <img
                             src={p?.sprites?.front_default || image}
                             alt={p.name}
                             className="w-28 h-28 mx-auto"
                         />

                         <h2 className="text-lg font-bold capitalize mt-2">
                             {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                         </h2>
                     </div>

                 )))}

             </div>

             {/*{ Pagination previous and next button}*/}
             {filteredData.length>0 &&(
                 <div className="flex gap-4 mt-6 justify-between">
                     <button
                         disabled={!prevUrl}
                         onClick={()=>fetchPokemon(prevUrl)}
                         className={`px-3 py-2 rounded text-white 
                        ${!prevUrl ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
                        `}>
                         Previous
                     </button>
                     <button
                         disabled={!nextUrl}
                         onClick={()=>fetchPokemon(nextUrl)}
                         className={`px-3 py-2 rounded text-white transition-all duration-200
                        ${!nextUrl ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
                        `}>
                         Next
                     </button>
                 </div>
             )}


         {/*    Detail Modal*/}
             {selectedPokemon &&(
                 <PokemonModal
                 pokemon={selectedPokemon}
                 onClose={()=>setSelectedPokemon(null)}/>
             )}
         </div>

     )
 }

export default Pokemon_Card