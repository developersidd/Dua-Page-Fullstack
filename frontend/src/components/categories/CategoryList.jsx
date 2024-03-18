import { useState } from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories }) => {
  const [active, setActive] = useState(1);
  
  return (
    <div className="space-y-3">
      {categories?.map((category) => (
        <CategoryItem
          isActive={active === Number(category.cat_id)}
          onActive={setActive}
          key={category?.cat_id}
          category={category}
        />
      ))}
    </div>
  );
};

export default CategoryList;
