const Error = ({  onRetry }) => {
    return (
        <div className="text-center">
            <h2 className="text-red-500">Failed to load Pokémon</h2>
            <button
                onClick={onRetry}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Retry
            </button>
        </div>
    );
};

export default Error;