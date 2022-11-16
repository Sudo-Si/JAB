import { createContext, useReducer } from "react";

const INITAL_STATE ={
    user:null,
    isFetching:false,
    error: false
};
export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
  });
  
  export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
  });
  
  export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
  });