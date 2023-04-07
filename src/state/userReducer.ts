import { ActionType, InitialStateType } from "../types";
import { FILTER_USER, CLEAR_USER } from "./userTypes";


const userReducer = (state: InitialStateType, action: ActionType):InitialStateType => {
  console.log("state = userReducer", state, action)
  switch (action.type) {
    case FILTER_USER:
      return {
        ...state,
        filtered: state.users.filter((user) => {
          const regex = new RegExp(`${action.payload}`, "ig");
          return user.name.match(regex) || user.profession.match(regex);
        }),
      };

    case CLEAR_USER:
      return {
        ...state,
        filtered: null,
      };

    default:
      return state;
  }
};

export default userReducer;
