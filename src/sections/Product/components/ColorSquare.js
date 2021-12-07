const ColorSquare = props => {
  const color = props.color;

  const colors = {
    white: "bg-white",
    black: "bg-black",
    red: "bg-red",
    blue: "bg-blue",
    green: "bg-green",
  }

  let className = "color-square";

  if(color){
    const bgColor = colors[color];
    className += ` ${bgColor}`;
  }

  return <div className={className}></div>
}

export default ColorSquare