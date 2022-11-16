import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
// Create initial state will be null casue no user yet
const INITAL_STATE ={
    user:null,
    isFetching:false,
    error: false
};
// const INITIAL_STATE = {
//     user: JSON.parse(localStorage.getItem("user")) || null,
//     isFetching: false,
//     error: false,
//   };
export const Context = createContext(INITAL_STATE);
// export const Context = createContext(INITIAL_STATE);

export const ContextProvider =({children}) => {
const [state, dispatch] = useReducer(Reducer, INITAL_STATE);
// console.log()

return(
    <Context.Provider value={
      {  user:state.user,
        isFetching: state.isFetching,
        error: state.error, 
    dispatch, 
    }}
>
        {children}
    </Context.Provider>
)
}