// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../Ingredient/Ingredient.jsx";

const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          index={index}
          type="remove"
          removeFromBurger={props.removeFromBurger}
        />
      ))}
    </ul>
  );
};

export default BurgerStack;
