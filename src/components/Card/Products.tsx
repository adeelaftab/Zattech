import { For } from "solid-js";

const Products = ({ Product }: any) => {
  return (
    <div class="">
      <div class="  dark:text-white flex justify-center  text-2xl  mb-6 md:text-5xl md:py-8 hover:text-cyan-500 font-bold underline underline-offset-8 md:my-20 uppercase ">
        {" "}
        Recent projects
      </div>
      <div class="max-w-full md:grid lg:grid-cols-4 md:grid-cols-2 md:gap-10  border-spacing-16 m-2 p-4 rounded-lg">
        <For each={Product}>
          {(prop) => (
            <div class="text-center flex flex-col dark:text-white">
              <div class=" overflow-hidden">
                <img
                  src={prop.img}
                  alt="....Loading"
                  class="hover:scale-125 duration-1000 md:h-60 md:w-full h-40 w-40 "
                />
              </div>
              <h3 class="md:text-2xl text-xs py-2 font-bold uppercase dark:text-white">
                {prop.title}{" "}
              </h3>
              <p class="m-2 p-2 text-xs text-black dark:text-white ">
                {prop.description}
              </p>
              <a
                href="/products"
                class="hover:bg-blue-600 bg-blue-400 text-l rounded-lg md:m-2 md:p-2 "
              >
                Learn More -{">"}
              </a>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default Products;
