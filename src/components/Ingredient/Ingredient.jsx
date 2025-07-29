const Ingredient = (props) => {
  return (
    <li style={{ backgroundColor: props.ingredient.color }}>
      {props.ingredient.name}
      {props.type === "add" && <button onClick={() => props.addToBurger(props.index)}>+</button>}
      {props.type === "remove" && <button onClick={() => props.removeFromBurger(props.index)}>x</button>}
    </li>
  );
};

export default Ingredient;
