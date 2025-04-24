const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const User = require("./models/User");
const Word = require("./models/Word");

mongoose
  .connect("mongodb://127.0.0.1:27017/vocabulary")
  .then(() => console.log("Connected!"))
  .catch((error) => console.error("mongodb hatası", error));

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://vocabulary-card-api.netlify.app",
    ],
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
      res.json({ message: "giriş başarılı", userId: user._id });
    } else {
      res.status(500).json({ message: "geçersiz bilgiler" });
    }
  } catch (err) {
    console.err("giriş hatası", err);
    res.status(500).json({ message: "giriş sırasında hata oluştu" });
  }
});

app.post("/add-word", async (req, res) => {
  const { english, turkish, cardType, userId } = req.body;

  try {
    const newWord = new Word({ english, turkish, cardType, userId });
    await newWord.save();
    res.json({ message: "Kelime eklendi!" });
  } catch (err) {
    console.error("Kelime ekleme hatası:", err);
    res.status(500).json({ message: "Kelime eklenemedi." });
  }
});

app.get("/words/:cardType/:userId", async (req, res) => {
  const { cardType, userId } = req.params;

  try {
    const words = await Word.find({ cardType, userId });
    res.json(words);
  } catch (err) {
    console.error("Kelimeleri getirme hatası:", err);
    res.status(500).json({ message: "Kelimeler getirilemedi." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on on http://localhost:${PORT} `);
});
