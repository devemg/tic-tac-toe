import './Square.css';

/**
 * Represent a piece of the game
 * Is a clickable element
 * @param {*} props 
 * @returns 
 */
function Square (props) {
  let color = 'font-transparent';
  if(props.value){
    color = props.value === 'X'?'font-pink':'font-green'
  }
    return (
      <button className={`square ${color}`} onClick={props.onClick}>
        {props.value?props.value:'1'}
      </button>
    );
}

export default Square;