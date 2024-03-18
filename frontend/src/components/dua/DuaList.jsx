"use client";
import useDuaContext from "@/hooks/useDuaContext";

const DuaList = () => {
  const { state } = useDuaContext();
  console.log("state:", state);
  return <div>DuaList</div>;
};

export default DuaList;