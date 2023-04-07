import { useContext } from "react";
import { UserContext } from "../../state/index";
import { UserList } from "../../types";
import UserCard from "../userCard";

type Props = {
  darkMode: boolean;
};

const UserCardList = ({ darkMode }: Props) => {
  const { state } = useContext(UserContext);
  const { users, filtered } = state;
  return (
    <div
      className={`${
        darkMode ? "bg-custome-Darkbg-ContentColor" : "bg-custome-bg-color"
      } h-full rounded-tl-lg flex justify-center flex-wrap gap-x-5 gap-y-5 grid-rows-2 px-8 py-8`}
    >
      {filtered === null
        ? users.map((user: UserList) => (
            <UserCard userDetails={user} darkMode={darkMode} key={user.id} />
          ))
        : filtered.map((user: UserList) => (
            <UserCard userDetails={user} darkMode={darkMode} key={user.id} />
          ))}
    </div>
  );
};

export default UserCardList;
