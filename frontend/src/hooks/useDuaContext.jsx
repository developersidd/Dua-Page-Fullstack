"use client";
import { DuaContext } from "@/context";
import { useContext } from "react";

const useDuaContext = () => {
  return useContext(DuaContext);
};

export default useDuaContext;
