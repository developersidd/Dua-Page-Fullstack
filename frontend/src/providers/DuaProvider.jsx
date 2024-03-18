"use client";
import { DuaContext } from "@/context";
import { duaReducer, initialState } from "@/reducers/dua.reducer";
import { useReducer } from "react";

const DuaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(duaReducer, initialState);
  return (
    <DuaContext.Provider value={{ state, dispatch }}>
      {children}
    </DuaContext.Provider>
  );
};

export default DuaProvider;
