import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserState from "./state";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <UserState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserState>
    </div>
  );
}

export default App;
