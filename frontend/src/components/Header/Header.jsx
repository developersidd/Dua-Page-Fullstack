import Icon from "../common/Icon";

const Header = () => {
  return (
    <div className="grid grid-cols-5 place-items-end items-center">
      <div className="justify-self-start">
        <h3 className="text-xl md:text-2xl">Duas Page</h3>
      </div>
      <div className="col-start-3 col-span-2 ">
        <div className="focus-within:border-primary border border-white shadow-sm flex items-center w-[22rem] p-1  h-12 bg-white rounded-lg ">
          <input
            placeholder="Search By Dua Name"
            className="w-full h-full outline-none border-none p-4 text-sm"
            type="text"
            name=""
            id=""
          />
          <div className="bg-gray-100 w-16 rounded h-full flex items-center justify-center">
            <Icon classes={"w-4"} name="search.svg" alt={"search"} />
          </div>
        </div>
      </div>
      <div className="col-start-5">
        <Icon classes={"size-10"} name="profile.svg" alt={"profile"} />
      </div>
    </div>
  );
};

export default Header;
