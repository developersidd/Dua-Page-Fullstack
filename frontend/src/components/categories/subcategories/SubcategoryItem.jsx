import { useEffect, useState } from "react";

const SubcategoryItem = ({ subcategory, onActive, isActive }) => {
  const { subcat_name_en, subcat_id } = subcategory || {};
  const [subcategories, setSubcategories] = useState([]);
  
  return (
    <div
      onClick={() => onActive(subcat_id)}
      key={subcat_id}
      className="cursor-pointer py-2 pl-2 relative
            before:size-[7px] before:bg-primary before:top-4 before:-left-[13px] before:absolute before:rounded-full
            "
    >
      <h4 className="text-[0.875rem] text-gray-700 font-medium">
        {subcat_name_en}
      </h4>
    </div>
  );
};

export default SubcategoryItem;
