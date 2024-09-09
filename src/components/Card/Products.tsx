import { For } from "solid-js";

const Products = (props: any) => {
  return (
    <>
      <div class="flex justify-center text-5xl md:py-8 hover:text-cyan-500 font-bold underline underline-offset-8 md:my-20 uppercase ">
        {" "}
        Recent projects
      </div>
      <div class="max-w-full grid lg:grid-cols-4 md:grid-cols-2 gap-10  border-spacing-16 m-2 p-4 rounded-lg ">
        <For each={props.Project}>
          {(prop) => (
            <div class="text-center ">
              <div class="overflow-hidden">
                <img
                  src={prop.img}
                  alt="....Loading"
                  class="hover:scale-125 duration-1000 md:h-60  px-3h-60 justify-center"
                />
              </div>
              <h3 class="text-2xl py-2 font-bold uppercase">{prop.title} </h3>
              <p class="m-2 p-2  text-black ">{prop.description}</p>
              <a
                href="/products"
                class="hover:bg-blue-600 bg-blue-400 rounded-lg m-2 p-2 "
              >
                Learn More -{">"}
              </a>
            </div>
          )}
        </For>
      </div>
    </>
  );
};

export default Products;
