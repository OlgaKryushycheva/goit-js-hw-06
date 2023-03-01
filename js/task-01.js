const categoriesEl = document.querySelector('#categories');
const categoriesItem = categoriesEl.children;
console.log('Number of categories: ', categoriesItem.length);

for (const item of categoriesItem) {
  const categoryName = item.firstElementChild.textContent;
  const elementsNumber = item.lastElementChild.children.length;

  console.log('Category: ', categoryName);
  console.log('Elements: ', elementsNumber);
}
