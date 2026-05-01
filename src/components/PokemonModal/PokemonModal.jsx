const PokemonModal = ({ pokemon, onClose }) => {

    // stats data
    const stats = [
        { name: "HP", value: pokemon.stats[0].base_stat, color: "bg-green-500" },
        { name: "Attack", value: pokemon.stats[1].base_stat, color: "bg-red-500" },
        { name: "Defense", value: pokemon.stats[2].base_stat, color: "bg-blue-500" },
    ];
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-gradient-to-br from-yellow-100 to-orange-200 w-[90%] max-w-md p-6 rounded-2xl relative shadow-2xl">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-xl font-bold"
                >
                    ✕
                </button>

                {/* image */}
                <div className="text-center">
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="mx-auto w-32 h-32"
                    />
                    <h2 className="text-2xl font-bold capitalize">
                        {pokemon.name}
                    </h2>
                </div>

                {/*stats*/}
                {stats.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 w-full">
                        <p className="w-20 font-bold">{s.name}</p>
                        <div className="flex-1 bg-gray-200 h-2 rounded">
                            <div
                                className={`${s.color} h-2 rounded`}
                                style={{ width: `${s.value}%` }}
                            />
                        </div>
                    </div>
                ))}

                {/* Abilities */}
                <div className="  mt-4">
                    <h3 className="font-bold">Abilities:</h3>
                    <ul className="list-disc ml-5">
                        {pokemon.abilities.map((a, i) => (
                            <li key={i} className="capitalize">
                                {a.ability.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonModal