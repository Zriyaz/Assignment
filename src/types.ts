export interface MenuList {
  id: number;
  label: string;
  renderIcon: (menu: any, selectedMenu: number) => JSX.Element
}

export interface UserList {
  name: string;
  id: number;
  profession: string;
}
export interface UsersList {
  users: UserList[];
}

export interface TogglePropsType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export interface InitialStateType {
  users: UserList[];
  filtered: UserList[] | null;
}

export interface ActionType {
  type: string;
  payload?: string;
}
