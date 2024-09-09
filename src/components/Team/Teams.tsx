import { For } from "solid-js";
import { FaBrandsLinkedin } from "solid-icons/fa";
import { A } from "@solidjs/router";
import { teams } from "../../services/Services";

const Teams = () => {
  return (
    <div>
      <div>
        <span class="text-6xl  px-2 m-4 font-bold underline underline-offset-8">
          Our Team
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:my-4 md:mt-20 ">
        <For each={teams}>
          {(team) => (
            <div class="shadow-lg rounded-lg overflow-hidden hover:scale-125 duration-1000">
              <img src={team.pic} alt="Team Member" class="px-20 mt-10" />

              <p class="text-xl font-bold ">
                {team.name}
                <b />
                <span class="absolute text-4xl mb-45 pl-5">
                  <A href={team.url}>
                    <FaBrandsLinkedin class="hover:text-blue-600 hover:scale-125 duration-1000 mt-4" />
                  </A>
                </span>
              </p>
              <p class="mb-2 ">{team.designation}</p>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default Teams;
