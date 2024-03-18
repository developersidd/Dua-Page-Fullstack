import Header from "@/components/Header/Header";
import Categories from "@/components/categories/Categories";
import DuaList from "@/components/dua/DuaList";
import Settings from "@/components/settting/Settings";
import Sidebar from "@/components/sidebar/Sidebar";
import DuaProvider from "@/providers/DuaProvider";

export default function Home() {
  return (
    <main className="bg-secondary scroll-smooth py-14 px-10 grid grid-cols-[100px,350px,1fr,300px] grid-rows-[46px,1fr] fixed gap-x-7 gap-y-5">
      <section className="col-start-2 col-span-3 row-span-1">
        <Header />
      </section>
      <section className="row-start-1 row-span-2 h-[calc(100vh-85px)] overflow-y-auto">
        <Sidebar />
      </section>
      <DuaProvider>
        <section className="h-[calc(100vh-146px)]  bg-white rounded-xl">
          <Categories />
        </section>

        <section className="h-[calc(100vh-100px)] overflow-y-auto pb-12">
          <DuaList />
        </section>
      </DuaProvider>

      <section className="h-[calc(100vh-146px)]">
        <Settings />
      </section>
    </main>
  );
}
