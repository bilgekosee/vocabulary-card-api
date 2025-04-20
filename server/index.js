const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("yesss backend çalışıyooo");
});

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  console.log("new user:", username, email, password);
  res.json({ message: "user successful" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on on http://localhost:${PORT} `);
});
