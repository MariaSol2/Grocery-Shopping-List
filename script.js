var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];

console.log(groceries.length); // log out length of groceries

var deleteDuplicates = function (list) {  //create var called delete duplicates for function expression with list as parameter
  var cleanList = []; 

  for (var item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }

  return cleanList;
};

var newGroceries = deleteDuplicates(groceries);

console.log(newGroceries.length);

newGroceries.forEach(function (item, index) {
  console.log(`#${index + 1} - ${item}`);
});