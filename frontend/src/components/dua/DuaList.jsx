"use client";
import useDuaContext from "@/hooks/useDuaContext";
import DuaCard from "./DuaCard";

const DuaList = () => {
  const { state: { duas } = {} } = useDuaContext();
  return (
    <div className="space-y-5">
      {duas.map((dua) => (
        <DuaCard key={dua.id} dua={dua} />
      ))}
    </div>
  );
};

export default DuaList;
