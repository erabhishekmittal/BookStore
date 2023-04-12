const express = require("express");

require("./db/conn");
const router = require("./routers/route");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

//Connection Server
app.listen(port, () => {
  console.log(`Server is listening at port: ${port}`);
});
