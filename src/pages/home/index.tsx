import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import { useState } from "react";
import UserCardList from "../../components/userList/UserList";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (): void => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div>
      <Navbar darkMode={darkMode} />
      <div className="flex h-screen w-full">
        <div
          className={`${
            darkMode ? "bg-custome-Darkbg-Color" : "bg-custome-bg-whiteColor"
          } `}
        >
          <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div
          className={`${
            darkMode ? "bg-custome-Darkbg-Color" : "bg-custome-bg-whiteColor"
          } w-full h-full`}
        >
          <UserCardList darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Home;
