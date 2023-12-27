/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const totals = {};

  for (const transaction of transactions) {
    if (totals[transaction.category]) {
      totals[transaction.category] += transaction.price;
    } else {
      totals[transaction.category] = transaction.price;
    }
  }

  const output = [];
  for (const category in totals) {
    output.push({
      category: category,
      totalSpent: totals[category],
    });
  }

  return output;
}

module.exports = calculateTotalSpentByCategory;
