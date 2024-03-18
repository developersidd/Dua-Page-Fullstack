import { useState } from "react";
import SubcategoryItem from "./SubcategoryItem";

const SubcategoryList = ({ subcategories }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="border-l-2 border-dotted border-primary ml-9 p-2">
      {subcategories?.map((subcategory) => (
        <SubcategoryItem
          onActive={setActive}
          isActive={active === Number(subcategory.subcat_id)}
          key={subcategory?.subcat_id}
          subcategory={subcategory}
        />
      ))}
    </div>
  );
};

export default SubcategoryList;
