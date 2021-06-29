import Game from "./Components/Game/Game";
import './App.css';

/**
 * Represents all application
 */
function App() {
    return (
        <div className="contanier-all">
           <h1>Tic Tac Toe</h1>
           <Game />
        </div>
    );
}

export default App;