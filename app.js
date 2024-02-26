require("dotenv").config();
const express = require("express");
const { connectDatabase } = require("./helpers/database/connectDatabase");
const User = require("./models/User");
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDb Connection
connectDatabase();

// Middlewares
app.use(express.json());

// http://localhost:5000
app.get("/", (req, res) => {
  // http://localhost:5000/hello
  res.send("Hello World!");
});

app.post("/api/createUser", async (req, res) => {
  const { name, email, gender, age, height, role } = req.body;

  const user = await User.create({ name, email, gender, age, height, role });

  res.status(200).json({
    status: "success",
    user: user,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
