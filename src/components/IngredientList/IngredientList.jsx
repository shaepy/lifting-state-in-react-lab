// src/components/IngredientList/IngredientList.jsx
import Ingredient from "../Ingredient/Ingredient.jsx";

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <Ingredient 
          key={index} 
          ingredient={ingredient} 
          index={index} 
          type="add" 
          addToBurger={props.addToBurger} 
        />
      ))}
    </ul>
  );
};

export default IngredientList;
