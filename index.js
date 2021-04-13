const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.co9ei.mongodb.net/ChillaxDb?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    );

    app.listen(PORT, () => {
      console.log("listen " + PORT);
    });
  } catch (error) {
    console.log(error.message);
  }
}
start();
