import { For } from "solid-js";
import { blogPosts } from "../../signals/Projects";

const OurServices = () => {
  return (
    <div class="max-w-full shadow-xl md:py-14">
      <div class="flex justify-center">
        <button class="flex justify-center text-5xl py-10 font-bold dark:text-white text-black md:underline underline-offset-8 md:my-12 dark:hover:text-cyan-500 hover:text-cyan-500">
          Our Services{" "}
        </button>
      </div>
      <div class="grid md:grid-cols-3 gap-7 grid-cols-2 dark:text-white justify-center pl-24">
        <For each={blogPosts}>
          {(blog) => (
            <div class="flex flex-col justify-center max-w-sm rounded overflow-hidden shadow-lg min-h-[350px]">
              <a href="/services" class="flex flex-col h-full">
                <img
                  class="w-full h-32 md:w-full md:h-1/2 flex items-center"
                  src={blog.image}
                  alt="Service Image"
                />
                <div class="px-6 py-4 flex-grow">
                  <div class="font-bold text-sm md:text-xl mb-2 text-wrap">
                    {blog.title}
                  </div>
                  <p class="text-gray-700 text-xs dark:text-white">
                    {blog.description}
                  </p>
                </div>
                <div class="px-6 py-4 mt-auto text-center">
                  <button class="text-lg font-bold text-white bg-gradient-to-l from-cyan-600 to-blue-600 hover:bg-cyan-700 duration-1000 md:text-lg md:px-2 md:py-1 rounded-lg hover:scale-110 px-4 py-2">
                    Learn More {"->"}
                  </button>
                </div>
              </a>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default OurServices;
