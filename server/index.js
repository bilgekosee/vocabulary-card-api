const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const User = require("./models/User");

mongoose
  .connect("mongodb://127.0.0.1:27017/vocabulary")
  .then(() => console.log("Connected!"))
  .catch((error) => console.error("mongodb hatası", error));

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

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.json({ message: "Kayıt başarılı!", redirect: "/login" });
  } catch (err) {
    console.error("Kayıt hatası:", err);
    res.status(500).json({ message: "Kayıt sırasında hata oluştu." });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ message: "giriş başarılı" });
    } else {
      res.status(500).json({ message: "geçersiz bilgiler" });
    }
  } catch (err) {
    console.err("giriş hatası", err);
    res.status(500).json({ message: "giriş sırasında hata oluştu" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on on http://localhost:${PORT} `);
});
