import React, { createContext, useContext } from "react";

export const UserContext = createContext();
// const { Provider } = UserContext;

export function useUser() {
  const user = useContext(UserContext);
  return user;
}

function Provider(props) {
  // const [user, setUser] = useState("User");
  return (
    <UserContext.Provider value={props.store}>
      <>{props.children}</>
    </UserContext.Provider>
  );
}

export default Provider;
