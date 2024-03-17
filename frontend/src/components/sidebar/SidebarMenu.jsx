import Link from "next/link";
import  Icon  from "../common/Icon";
const icons = [
  "home",
  "alldua",
  "memorize",
  "bookmark",
  "ruqyah",
  "dua-info",
  "books",
];
const SidebarMenu = () => {
  return (
    <div>
      <ul className="space-y-5">
        {icons.map((icon) => (
          <li className="bg-secondary p-3 rounded-full" key={icon}>
            <Link href={`/${icon}`}>
              <Icon classes={"w-5"} alt="IDR-Dua" name={`${icon}.svg`} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
