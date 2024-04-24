const fs = require("fs");

(async function () {
  try {
    fs.rmSync("./dist", { recursive: true });
  } catch (e) {
    console.log(e);
  }
})();
