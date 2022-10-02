const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const createIngridientsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = ingredient;
    return itemEl;
  });
};

const elements = createIngridientsList(ingredients);

const listEl = document.querySelector("#ingredients");
listEl.append(...elements);