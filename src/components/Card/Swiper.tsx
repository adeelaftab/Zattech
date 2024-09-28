import { For } from "solid-js";
import { MainPageProjects } from "../../services/Services";

const Swiper = () => {
  return (
    <>
      <div class="mt-10 text-4xl text-black my-9 font-extrabold flex justify-center gap-2">
        Our{" "}
        <span class="text-blue-500 font-bold ">
          {" "}
          {""} Recent {""}
        </span>{" "}
        Projects
      </div>
      <div class="carousel rounded-box w-full">
        <For each={MainPageProjects}>
          {(prop) => (
            <div class="carousel-item w-full text-center flex flex-col flex-wrap">
              <div class="overflow-hidden">
                <img
                  src={prop.img}
                  alt="....Loading"
                  class="hover:scale-125 duration-1000 md:h-60 md:w-full h-40 w-full"
                />
              </div>
              <div class="text-4xl text-black my-9">{prop.title} </div>
              <p class="m-2 p-2 text-xs text-black px-2">{prop.description}</p>
              <a
                href="/products"
                class="hover:bg-blue-600 bg-blue-400 text-lg rounded-lg mx-8"
              >
                Swipe More →
              </a>
            </div>
          )}
        </For>
      </div>
    </>
  );
};

export default Swiper;
