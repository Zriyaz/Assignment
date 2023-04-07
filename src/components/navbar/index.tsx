import { FaSearch } from "react-icons/fa";
import { useState, useContext } from "react";
import { UserContext } from "../../state/index";
import { CLEAR_USER, FILTER_USER } from "../../state/userTypes";

const Navbar = (props: any) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { dispatch } = useContext(UserContext);

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
    if (e.target.value !== "") {
      dispatch({ type: FILTER_USER, payload: searchValue });
    } else {
      dispatch({ type: CLEAR_USER });
    }
  };
  return (
    <div
      className={`flex items-center h-24 ${
        props.darkMode ? "bg-custome-Darkbg-Color" : "bg-custome-bg-whiteColor"
      }  `}
    >
      <div className="flex items-center justify-between py-5 pr-12 w-full">
        <div className="pl-72">
          <p
            data-testid="team-members"
            className={` text-xl font-semibold ${
              props.darkMode
                ? "text-custome-bg-color"
                : "text-custome-text-blackColor"
            }`}
          >
            Team Members
          </p>
        </div>
        <div className="flex items-center">
          <input
            data-testid="searchInputId"
            className={`py-1 border rounded-lg px-2  ${
              props.darkMode
                ? "bg-custome-text-blackColor placeholder-gray-500 text-white"
                : "bg-custome-bg-colo placeholder-gray-500 "
            }`}
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleChange}
          />
          <div className="relative right-7">
            <FaSearch className="text-custome-text-Professioncolor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
