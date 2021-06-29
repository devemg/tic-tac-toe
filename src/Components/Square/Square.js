/**
 * Represent a piece of the game
 * Is a clickable element
 * @param {*} props 
 * @returns 
 */
function Square (props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

export default Square;