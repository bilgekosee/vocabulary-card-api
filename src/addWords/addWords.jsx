import { useState } from "react";
import "./addWords.css";
const AddWords = ({ userId }) => {
  const [english, setEnglish] = useState("");
  const [turkish, setTurkish] = useState("");
  const [cardType, setCardType] = useState("4");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:3000/add-word", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ english, turkish, cardType, userId }),
      });

      const data = await res.json();
      alert(data.message);

      setEnglish("");
      setTurkish("");
      setCardType("1");
    } catch (err) {
      console.error("Kelime ekleme hatası:", err);
      alert("Kelime eklenemedi!");
    }
  };
  return (
    <div className="addword-container">
      <div className="add-english-turkish">
        <form className="addword-wrapper" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="English word"
            required
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Turkish word"
            value={turkish}
            onChange={(e) => setTurkish(e.target.value)}
            required
          ></input>
          <select
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
          >
            <option value="1">Card Type 1</option>
            <option value="2">Card Type 2</option>
            <option value="3">Card Type 3</option>
            <option value="4">Card Type 4</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};
export default AddWords;
