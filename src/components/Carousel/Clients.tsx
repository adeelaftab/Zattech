import { For } from "solid-js";
import { logos } from "../../signals/Projects";

const Clients = () => {
  return (
    <div class="inline-flex w-full">
      <div class=" logos overflow-hidden  w-full md:w-full">
        <div class="logos-slide h-40 w-40 flex flex-row gap-44">
          <For each={logos}>
            {(logo) => <img src={logo?.url} alt="..loading" class="h-20" />}
          </For>
        </div>
      </div>
    </div>
  );
};

export default Clients;
