import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserState from "./state";
import Home from "./pages/home";
import DarkModeState from "./state/darkModeContext/darkModeContext";
import { FC } from "react";

const App: FC = (): JSX.Element => {
  return (
    <DarkModeState>
      <UserState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserState>
    </DarkModeState>
  );
};

export default App;
