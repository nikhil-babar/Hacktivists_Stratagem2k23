const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "POST", "PATCH"],
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.status(200).json({ message: "Welcome client" });
});

app.listen(5000, () => console.log("Server listening on port 5000"));
