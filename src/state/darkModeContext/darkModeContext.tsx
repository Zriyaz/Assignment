import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

export interface InitialStateType {
  darkMode: boolean;
}

export interface ActionType {
  type: string;
}

const initialState: InitialStateType = {
  darkMode: false,
};

// DarkModeContext

export const DarkModeContext = createContext<{
  state: InitialStateType;
  toggleMode: () => void;
}>({ state: initialState, toggleMode: () => null });

// DarkModeState is an HOC
const DarkModeState = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(DarkModeReducer, initialState);

  const toggleMode = (): void => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <DarkModeContext.Provider value={{ state, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeState;
