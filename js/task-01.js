const categoryEl = document.querySelector('#categories');
const itemEl = categoryEl.querySelectorAll('.item');
const numberCategory = itemEl.length;
console.log(`Number of categories:${numberCategory} `);

const getNameCategory = categories => { 
    return categories.forEach(element => {
        const nameCategory = element.firstElementChild.textContent;
        const numberInCategoryEl = element.querySelectorAll('li').length;
        console.log(`Category: ${nameCategory}`);
        console.log(`Elements: ${numberInCategoryEl} `);
});
};

getNameCategory(itemEl);