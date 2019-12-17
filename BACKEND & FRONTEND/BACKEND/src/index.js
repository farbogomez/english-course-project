const { app } = require("./bin/routes");

app.listen(8601, () => {
  console.log("Server On");
});
