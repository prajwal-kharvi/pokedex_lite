const Shimmer_Ui=()=>{
    return(
        <div className="w-full h-auto p-16 mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-br from-yellow-100 to-orange-200 p-6 rounded-2xl shadow-md text-center animate-pulse"
                    >
                        {/* Image shimmer */}
                        <div className="w-28 h-28 mx-auto bg-gray-300 rounded-full mb-3"></div>

                        {/* Name shimmer */}
                        <div className="h-5 bg-gray-300 rounded w-2/3 mx-auto"></div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Shimmer_Ui