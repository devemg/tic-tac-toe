import Game from "./Components/Game/Game";
import './App.css';
import logo from './assets/icon.svg'; 
/**
 * Represents all application
 */
function App() {
    return (
        <div className="contanier-all">
           <h1> <img alt="f" className="img-logo" src={logo}/> Tic Tac Toe</h1>
           <Game />
        </div>
    );
}

export default App;