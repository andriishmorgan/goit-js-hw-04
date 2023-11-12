function isEnoughCapacity(products, containerSize) {
let totalProducts = 0;
  for (const quantity of Object.values(products)) {
    totalProducts += quantity;
    }
 return totalProducts <= containerSize;
}

console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7));