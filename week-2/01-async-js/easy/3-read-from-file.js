const fs = require("fs");

fs.readFile("week-2/01-async-js/easy/a.txt", "utf-8", (err, data) => {
  console.log(data);
});

let a = 0;
for (let i = 0; i < 10000000; i++) {
  a++;
}
