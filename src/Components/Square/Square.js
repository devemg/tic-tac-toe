import './Square.css';

/**
 * Represent a piece of the game
 * Is a clickable element
 * @param {*} props 
 * @returns 
 */
function Square (props) {
    return (
      <button className={`square ${props.value?'font-color':'font-transparent'}`} onClick={props.onClick}>
        {props.value?props.value:'1'}
      </button>
    );
}

export default Square;