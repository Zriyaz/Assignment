import React, { createContext, useReducer } from "react";
import userReducer from "./userReducer";
import { ActionType, InitialStateType } from "../types";
import { usersData } from "./dataSource";

const initialState: InitialStateType = {
  users: usersData,
  filtered: null,
};

export const UserContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

const UserState = (props: any) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
