const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryElems = category.querySelectorAll("li");
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElems.length}`);
}
)
