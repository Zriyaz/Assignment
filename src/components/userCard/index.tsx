import React, { FC } from "react";
import {} from "../../assets/Pattern.png";
import { UserList } from "../../types";

interface UserDetails {
  userDetails: UserList;
}

interface CardProps extends UserDetails {
  darkMode: boolean;
  key: number;
}

const UserCard = ({ userDetails, darkMode, key }: CardProps): JSX.Element => {
  return (
    <div
      key={key}
      className={`w-48 h-60 bg-hero-pattern cursor-pointer bg-cover bg-no-repeat ${
        darkMode ? "bg-custome-Darkbg-color1" : ""
      }  rounded-large shadow-card`}
    >
      <div className=" h-full w-full flex items-center justify-center ">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="flex  items-center justify-center w-24 h-24 bg-custome-blue-color rounded-full">
              <p
                className={`text-custome-2xl font-bold uppercase leading-9 text-white`}
              >
                {userDetails.name.slice(0, 2)}
              </p>
            </div>
            <p
              className={`pt-4 text-custome-text-2xl font-semibold leading-6 ${
                darkMode ? "text-custome-bg-color" : "text-custome-bg-darkColor"
              }`}
            >
              {userDetails.name}
            </p>
            <p
              className={`pt-1 text-sm font-semibold leading-4  ${
                darkMode
                  ? "text-custome-text-darkcard"
                  : "text-custome-text-Professioncolor"
              }`}
            >
              {userDetails.profession}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
