import { For } from "solid-js";
import MainLayout from "../components/layouts/MainLayout";
import { projects } from "../signals/Projects";

const Products = () => {
  return (
    <MainLayout>
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-center mb-8">Our Products</h1>

        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <For each={projects}>
            {(project) => (
              <div class="bg-white shadow-lg rounded-lg p-4">
                <img
                  src={project.img}
                  alt={project.title}
                  class="w-full h-48 object-cover rounded-md"
                />
                <h2 class="text-xl font-semibold mt-4">{project.title}</h2>
                <p class="text-gray-600 mt-2">{project.description}</p>
              </div>
            )}
          </For>
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;
