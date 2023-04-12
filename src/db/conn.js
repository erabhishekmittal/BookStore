const mongoose = require("mongoose");

// Connection MongoDB
const DB =
  "mongodb+srv://abhishek:Abhishek12345@cluster0.l8wavu6.mongodb.net/bookstore?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successful."))
  .catch((err) => console.log(err));
