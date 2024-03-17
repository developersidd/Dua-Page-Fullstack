import Icon from "../common/Icon";

const Categories = () => {
  return (
    <div className="overflow-y-auto">
      <div className="">
        <div className="bg-primary p-4  rounded-t-xl mb-4">
          <h1 className="text-center text-lg text-white">Categories</h1>
        </div>
        <div className="focus-within:border-primary focus-within:border-2 shadow-sm border flex items-center w-[95%] mx-auto p-1 h-12 bg-white rounded-lg ">
          <div className="pl-3">
            <Icon classes={"w-5"} name="search.svg" alt={"search"} />
          </div>
          <input
            placeholder="Search By Dua Name"
            className="w-full h-full outline-none border-none p-4 text-sm"
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="h-[calc(100vh-300px)] overflow-y-auto p-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          corrupti explicabo id excepturi, odio ut natus reiciendis
          reprehenderit architecto quae quas, ullam dignissimos error, aliquam
          aperiam voluptas ipsum ad quod. Ratione odit numquam doloribus
          mollitia, quidem rerum nihil cum nobis nesciunt assumenda incidunt
          quam eos reiciendis perferendis deleniti illum rem voluptatibus at
          officia maxime nostrum voluptas tenetur? Aperiam rem repudiandae
          reprehenderit id aspernatur earum necessitatibus, dolore voluptatibus
          ut laudantium eius, nisi ipsum obcaecati! Iusto repellat ullam quaerat
          iure assumenda corporis eum quae, nisi unde? Magni voluptatibus,
          repellendus quos exercitationem cum eaque quibusdam molestias sequi.
          Fugit velit minus nulla optio in voluptatem neque ipsa quibusdam
          aliquid quisquam! Sunt numquam beatae qui error consectetur eligendi
          iusto? Optio, repellat. Quidem obcaecati unde, eveniet animi in magni
          odit, dolor impedit ea qui veritatis culpa, quasi earum nostrum sed
          quo? Magni maiores, accusantium voluptatem, obcaecati expedita facilis
          ratione quisquam quos qui ut eligendi pariatur veniam vel. Voluptatem,
          reprehenderit ipsa. Natus quam atque modi consectetur, expedita
          ducimus nesciunt perferendis voluptas exercitationem libero laudantium
          nostrum. Maxime culpa, beatae ea nemo officiis maiores qui soluta aut.
          Excepturi, rerum. Maiores quaerat sapiente animi enim modi! At neque
          nemo, a laborum veritatis fuga consequatur, temporibus natus nihil
          cumque, blanditiis eligendi qui labore deserunt inventore mollitia
          impedit! Eum magni nesciunt distinctio, vitae assumenda magnam
          necessitatibus veritatis doloribus eaque sed pariatur culpa inventore
          ullam voluptatibus consequatur sequi! Vitae doloremque dolores maxime
          illo perferendis sunt, repellat minima adipisci modi aliquam mollitia
          neque sit dicta aperiam, culpa optio! Itaque quasi quo consequatur
          possimus maxime aliquam hic optio quia debitis magnam ipsam facilis
          accusantium, quibusdam sunt in autem tempore minus id fuga sapiente
          inventore a cumque nemo? Inventore harum nulla adipisci officiis error
          itaque sunt? Ratione officiis repudiandae, odit totam harum sit
          explicabo maiores fugiat amet animi. Dolorum, odio laudantium! Facere,
          deserunt magni! Dolor, minus. lorem600
        </p>
      </div>
    </div>
  );
};

export default Categories;
