import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer saludo={"bienvenidos a mi pagina"}/>
        </div>
    )
}

export default App;