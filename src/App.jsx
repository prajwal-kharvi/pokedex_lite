import Header from "./components/Header/Header.jsx";
import Pokemon_Card from "./components/Pokemon_Card/Pokemon_Card.jsx";

function App() {
    return (
       <div className= "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
           <Header />
           <Pokemon_Card />
       </div>
    );
}

export default App;