"use client";
import useDuaContext from "@/hooks/useDuaContext";
import DuaCardSkeleton from "@/ui/DuaCardSkeleton";
import DuaCard from "./DuaCard";

const DuaList = () => {
  const { state: { duas, loading, error } = {} } = useDuaContext();
  // decide what to render
  let content;
  if (loading) {
    content = (
      <div className="space-y-5">
        {Array(7)
          .fill()
          .map((_, i) => (
            <DuaCardSkeleton key={i} />
          ))}
      </div>
    );
  } else if (!loading && error) {
    content = <div> {error.message}</div>;
  } else if (!loading && !error && duas?.length > 0) {
    content = duas.map((dua) => <DuaCard key={dua.id} dua={dua} />);
  }
  return <div className="space-y-5">{content}</div>;
};

export default DuaList;
