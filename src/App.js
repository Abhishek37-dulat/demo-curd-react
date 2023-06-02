import "./App.css";
import Userform from "./Userform/Userform";
import UserDetails from "./Home/UserDetails";
import UserformUpdate from "./UserformUpdate/UserformUpdate.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserDetails />} />
          <Route path="/add" element={<Userform />} />
          <Route path="/update/:id" element={<UserformUpdate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
