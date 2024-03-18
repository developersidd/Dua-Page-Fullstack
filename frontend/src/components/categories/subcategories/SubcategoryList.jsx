import useDuaContext from "@/hooks/useDuaContext";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import SubcategoryItem from "./SubcategoryItem";

const SubcategoryList = ({ subcategories }) => {
  const searchParams = useSearchParams();
  const subcat_id = searchParams.get("subcat_id");
  const [active, setActive] = useState(Number(subcat_id) || 1);
  const { state } = useDuaContext();
  const duas = useMemo(
    () => state.duas?.filter((dua) => dua.subcat_id === active),
    [active, state.duas]
  );
  return (
    <div className="border-l-2 border-dotted border-primary ml-9 pl-2 pt-2 pb-2">
      {subcategories?.map((subcategory) => (
        <SubcategoryItem
          onActive={setActive}
          isActive={active === Number(subcategory.subcat_id)}
          key={subcategory?.subcat_id}
          subcategory={subcategory}
          duas={duas}
        />
      ))}
    </div>
  );
};

export default SubcategoryList;
