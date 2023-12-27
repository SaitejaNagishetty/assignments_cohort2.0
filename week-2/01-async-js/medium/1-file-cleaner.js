const fs = require("fs");

let text;
fs.readFile("week-2/01-async-js/medium/a.txt", "utf-8", (err, data) => {
  const output = data.replace(/\s+/g, " ");

  fs.writeFile("week-2/01-async-js/medium/a.txt", output, "utf-8", () => {
    console.log("Text Cleaned");
  });
});
