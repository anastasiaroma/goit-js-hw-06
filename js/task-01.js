const categoriesToFind = document.querySelectorAll(".item");
const categoriesLength = categoriesToFind.length;
console.log(`Number of categories: ${categoriesLength}`);

categoriesToFind.forEach((category) => {
  const groupOfElements = [...category.children];

  groupOfElements.forEach((element) => {
    if (element.tagName === "H2") {
      console.log(`Category: ${element.textContent}`);
    }
  });
  groupOfElements.forEach((element) => {
    if (element.tagName === "UL") {
      console.log(`Elements: ${element.children.length}`);
    }
  });
});