import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="App">
      <textarea>Forget me note 💔</textarea>
    </div>
  );
}

export default App;
