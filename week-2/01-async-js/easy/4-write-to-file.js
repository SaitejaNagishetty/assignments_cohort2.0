const fs = require("fs");

const NewWrite = "jai shri ram";

// fs.readFile("week-2/01-async-js/easy/a.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

fs.appendFile("week-2/01-async-js/easy/a.txt", NewWrite, "utf-8", (err) => {
  console.log("File has been written to!");
});

fs.readFile("week-2/01-async-js/easy/a.txt", "utf-8", (err, data) => {
  console.log(data);
});
