import { createContext, useState } from "react";

export const Authcontext = createContext();

var initialdata = {
  isAuth: false,
  token: null,
};
export const AuthcontextProvider = ({ children }) => {
  const [state, setstate] = useState(initialdata);

  function login(token) {
    setstate({
      ...initialdata,
      isAuth: true,
      token: token,
    });
  }
  function logout() {
    setstate({ ...initialdata, isAuth: false, token: null });
  }

  return (
    <Authcontext.Provider value={{ state, login, logout }}>
      {children}
    </Authcontext.Provider>
  );
};
