import { For, onMount } from "solid-js";
import { FaBrandsLinkedin } from "solid-icons/fa";
import { A } from "@solidjs/router";
import { teams } from "../../services/Services";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { FreeMode, Scrollbar } from "swiper/modules";

const Teams = () => {
  let swiperRef;

  onMount(() => {
    new Swiper(swiperRef, {
      direction: "horizontal",
      slidesPerView: 2,
      spaceBetween: 20,
      freeMode: true,
      scrollbar: { draggable: true },
      modules: [FreeMode, Scrollbar],
    });
  });

  return (
    <div>
      <div>
        <span class="dark:text-white text-6xl flex justify-center px-2 m-4 font-bold underline underline-offset-8">
          Our Team
        </span>
      </div>

      {/* Vertical Swiper for Mobile */}
      <div class="block md:hidden">
        <div ref={swiperRef} class="swiper h-[500px]">
          <div class="swiper-wrapper">
            <For each={teams}>
              {(team) => (
                <div class="swiper-slide w-full">
                  <div class="dark:text-white shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-500">
                    <img src={team.pic} alt="Team Member" class="px-20 mt-10" />
                    <p class="relative md:text-xl md:font-bold font-bold text-xl text-center my-2">
                      {team.name}
                    </p>
                    <p class="mb-2 text-sm text-center dark:bg-white dark:text-black">
                      {team.designation}
                    </p>
                    <span class="md:text-4xl mb-45 text-2xl flex justify-end">
                      <A href={team.url}>
                        <FaBrandsLinkedin class="hover:text-blue-600 hover:scale-125 duration-1000" />
                      </A>
                    </span>
                  </div>
                </div>
              )}
            </For>
          </div>
          <div class="swiper-scrollbar"></div>
        </div>
      </div>

      {/* Grid for Larger Screens */}
      <div class="hidden md:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 md:my-4 md:mt-20">
        <For each={teams}>
          {(team) => (
            <div class="dark:text-white shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-500">
              <img src={team.pic} alt="Team Member" class="px-20 mt-10" />
              <p class="relative md:text-xl md:font-bold font-bold text-xl text-center my-2">
                {team.name}
              </p>
              <p class="mb-2 text-sm text-center dark:bg-white dark:text-black">
                {team.designation}
              </p>
              <span class="md:text-4xl mb-45 text-2xl flex justify-end">
                <A href={team.url}>
                  <FaBrandsLinkedin class="hover:text-blue-600 hover:scale-125 duration-1000" />
                </A>
              </span>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default Teams;
