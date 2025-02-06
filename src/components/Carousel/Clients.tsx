import { For } from "solid-js";
import { Client } from "../../signals/Projects";

const Clients = () => {
  return (
    <div class="inline-flex w-full">
      <div class="logos overflow-hidden  w-full md:w-full">
        <div class="logos-slide h-16 flex flex-row justify-between gap-3 bg-transparent">
          <For each={Client}>
            {(logo) => <img src={logo?.url} alt="..loading" />}
          </For>
        </div>
      </div>
    </div>
  );
};

export default Clients;
