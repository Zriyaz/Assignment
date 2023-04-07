import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import { FC, useContext } from "react";
import UserCardList from "../../components/userList/UserList";
import { DarkModeContext } from "../../state/darkModeContext/darkModeContext";

const Home: FC = (): JSX.Element => {
  const { state } = useContext(DarkModeContext);
  const { darkMode } = state;

  return (
    <div>
      <Navbar />
      <div className="flex h-screen w-full">
        <div
          className={`${
            darkMode ? "bg-custome-Darkbg-Color" : "bg-custome-bg-whiteColor"
          } `}
        >
          <Sidebar />
        </div>
        <div
          className={`${
            darkMode ? "bg-custome-Darkbg-Color" : "bg-custome-bg-whiteColor"
          } w-full h-full`}
        >
          <UserCardList />
        </div>
      </div>
    </div>
  );
};

export default Home;
