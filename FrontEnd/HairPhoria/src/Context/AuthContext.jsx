import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  accessToken: localStorage.getItem("token") || "",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.accessToken);
      return {
        ...state,
        accessToken: action.payload.accessToken,
      };

    case "LOGOUT":
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      return {
        ...state,
        accessToken: "",
      };

    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const data = {
    dispatch,
    token: state.accessToken,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;