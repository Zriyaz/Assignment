import { FaSun } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineInbox } from "react-icons/ai";
import { BsMoonFill } from "react-icons/bs";
import { BiCube } from "react-icons/bi";
import { MenuList, TogglePropsType } from "../../types";
import { useState } from "react";

const Sidebar = ({
  toggleDarkMode,
  darkMode,
}: TogglePropsType): JSX.Element => {
  const [selectedMenu, setSelectedMenu] = useState<number>(1);

  // menuList objects
  const menuList: MenuList[] = [
    {
      id: 1,
      label: "Team Members",
      renderIcon: (menu, selectedMenu) => {
        return selectedMenu === menu.id ? (
          <FiUsers
            className={`icon text-custome-blue-text-1 font-medium text-lg ${
              darkMode
                ? "text-white"
                : !darkMode
                ? "text-white"
                : "text-custome-blue-color"
            } `}
          />
        ) : (
          <FiUsers
            className={`icon text-custome-blue-text-1 font-medium text-lg text-custome-blue-color`}
          />
        );
      },
    },
    {
      id: 2,
      label: "Products",
      renderIcon: (menu, selectedMenu) => {
        return selectedMenu === menu.id ? (
          <BiCube
            className={`icon text-custome-blue-text-1 font-medium text-lg ${
              darkMode
                ? "text-white"
                : !darkMode
                ? "text-white"
                : "text-custome-blue-color"
            } `}
          />
        ) : (
          <BiCube
            className={`icon text-custome-blue-text-1 font-medium text-lg text-custome-blue-color`}
          />
        );
      },
    },
    {
      id: 3,
      label: "Inbox",
      renderIcon: (menu, selectedMenu) => {
        return selectedMenu === menu.id ? (
          <AiOutlineInbox
            className={`icon text-custome-blue-text-1 font-medium text-lg ${
              darkMode
                ? "text-white"
                : !darkMode
                ? "text-white"
                : "text-custome-blue-color"
            } `}
          />
        ) : (
          <AiOutlineInbox
            className={`icon text-custome-blue-text-1 font-medium text-lg text-custome-blue-color`}
          />
        );
      },
    },
  ];

  // render menulist helper functions
  const renderMenuList = (): JSX.Element => {
    return (
      <ul className="">
        {menuList.map((menu: MenuList) => (
          <li
            onClick={() => setSelectedMenu(menu.id)}
            className={`w-full flex items-center  py-2 pl-2 cursor-pointer rounded-custome-border-radius ${
              menu.id === selectedMenu ? "bg-custome-blue-color" : ""
            }`}
          >
            <div className="pr-2 hover:text-custome-blue-text-2">
              {menu.renderIcon(menu, selectedMenu)}
            </div>
            <p
              className={`text-custome-blue-text-1 font-medium text-lg ${
                menu.id === selectedMenu ? "text-custome-blue-text-2" : ""
              }`}
            >
              {menu.label}
            </p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      className={` w-64 flex flex-col justify-between pt-6  pr-4 ${
        darkMode ? "bg-custome-Darkbg-Color" : "bg-custome-bg-whiteColor"
      } h-5/6`}
    >
      <div>{renderMenuList()}</div>
      <ul>
        <li
          onClick={toggleDarkMode}
          className={`flex items-center py-2 px-5 ${
            darkMode ? "bg-custome-blue-color" : ""
          }  cursor-pointer rounded-custome-border-radius`}
        >
          <div className="pr-4 hover:text-custome-blue-text-2">
            {darkMode ? (
              <BsMoonFill
                className={`icon text-custome-blue-text-1 font-medium text-lg ${
                  darkMode
                    ? "text-custome-bg-whiteColor"
                    : "text-custome-blue-color"
                }`}
              />
            ) : (
              <FaSun
                className={`icon  font-medium text-lg ${
                  darkMode
                    ? "text-custome-bg-whiteColor"
                    : "text-custome-blue-color"
                } `}
              />
            )}
          </div>

          <p
            className={`text-custome-blue-text-1 font-medium text-lg ${
              darkMode ? "text-custome-blue-text-2" : ""
            } `}
          >
            {darkMode ? "Dark Mode" : "Light Mode"}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
