import { For } from "solid-js";
import { logos } from "../../services/Services";

const Clients = () => {
  return (
    <div class="inline-flex w-full">
      <div class=" logos overflow-hidden md:w-full">
        <div class="logos-slide h-40 w-40 flex flex-row gap-16">
          <For each={logos}>{(logo) => <img src={logo.url} alt=".." />}</For>
        </div>
      </div>
    </div>
  );
};

export default Clients;
