import { createEffect, createSignal, For } from "solid-js";

import axios from "axios";

const Clients = () => {
  const [logos, setLogos]: any = createSignal([]);
  createEffect(() => {
    axios.get("http://localhost:3000/logos").then((res) => {
      console.log(res.data);
      setLogos(res.data);
    });
  });

  return (
    <div class="inline-flex w-full">
      <div class=" logos overflow-hidden  w-full md:w-full">
        <div class="logos-slide h-40 w-40 flex flex-row gap-16">
          <For each={logos()}>
            {(logo) => <img src={logo.url} alt="..loading" />}
          </For>
        </div>
      </div>
    </div>
  );
};

export default Clients;
