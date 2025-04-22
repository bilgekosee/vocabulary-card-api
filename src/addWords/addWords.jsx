import "./addWords.css";
import { useNavigate } from "react-router-dom";
const AddWords = () => {
  const navigate = useNavigate();
  return (
    <div className="addword-container">
      <div className="add-english-turkish">
        <from className="addword-wrapper">
          <input type="text" placeholder="English word" required></input>
          <input type="text" placeholder="Turkish word" required></input>
          <button type="submit">Add</button>
        </from>
      </div>
    </div>
  );
};
export default AddWords;
