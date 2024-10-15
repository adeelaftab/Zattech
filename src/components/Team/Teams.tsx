import { For } from "solid-js";
import { FaBrandsLinkedin } from "solid-icons/fa";
import { A } from "@solidjs/router";
import { teams } from "../../services/Services";

const Teams = () => {
  return (
    <div>
      <div>
        <span class=" dark:text-white text-6xl flex justify-center px-2 m-4 font-bold underline underline-offset-8">
          Our Team
        </span>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 md:my-4 md:mt-20 ">
        <For each={teams}>
          {(team) => (
            <div class=" dark:text-white shadow-lg rounded-lg overflow-hidden hover:scale-125 duration-1000">
              <img src={team.pic} alt="Team Member" class="px-20 mt-10" />

              <p class="relative md:text-xl md:font-bold font-bold  text-xl text-center my-2 ">
                {team.name}
              </p>
              <p class="mb-2  text-sm text-center dark:bg-white  dark:text-black  ">
                {team.designation}
              </p>
              <span class="md:text-4xl mb-45 text-2xl flex justify-end ">
                <A href={team.url}>
                  <FaBrandsLinkedin class="hover:text-blue-600 hover:scale-125 duration-1000 " />
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
