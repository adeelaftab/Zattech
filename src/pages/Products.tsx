import { For } from "solid-js";
import MainLayout from "../components/layouts/MainLayout";
import { projectMain, projects } from "../services/Services";

const Products = () => {
  return (
    <div>
      <MainLayout>
        <main class="min-h-screen">
          <div class="max-w-full grid lg:grid-cols-4 md:grid-cols-2 gap-10   ">
            <For each={projects}>
              {(project) => (
                <div class="text-center shadow-lg rounded-md mx-5 my-4 px-5">
                  <div class="overflow-hidden h-48">
                    <img
                      src={project.img}
                      alt="....Loading"
                      class="hover:scale-125 duration-1000"
                    />
                  </div>
                  <h3 class="text-2xl py-2 font-bold text-black uppercase underline">
                    {project.title}{" "}
                  </h3>
                  <p class="text-black">{project.description}</p>
                </div>
              )}
            </For>
          </div>
        </main>
      </MainLayout>
    </div>
  );
};

export default Products;
