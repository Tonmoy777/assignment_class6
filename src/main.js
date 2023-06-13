const search = prompt("Enter blood group");

// filter data
const result = bloodDonor.filter(
  (data) =>
    data.bloodGroup === search || data.cell === search || data.age >= search
);

// final data
const finalResult = [];

//get data;
result.forEach((items, index) => {
  finalResult.push(items);
});

// Show console
console.table(finalResult);
