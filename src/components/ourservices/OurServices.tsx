import { For } from "solid-js";
import { blogPosts } from "../../signals/Projects";

const OurServices = () => {
  return (
    <div class="max-w-full shadow-xl md:py-14">
      <div class="flex justify-center text-5xl py-10 font-bold dark:text-white  text-black md:underline underline-offset-8 md:my-12  dark:hover:text-cyan-500 hover:text-cyan-500">
        Our Services{" "}
      </div>
      <div class="grid md:grid-cols-3 gap-7 grid-cols-2 dark:text-white ">
        <For each={blogPosts}>
          {(blog) => (
            <div class="justify-center">
              <a
                href="/services"
                class="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <img
                  class="w-full h-32 md:w-full md:h-1/2 flex items-center"
                  src={blog.image}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-sm md:text-xl mb-2 text-wrap">
                    {blog.title}
                  </div>
                  <p class="text-gray-700 text-xs dark:text-white">
                    {blog.description}
                  </p>
                </div>
                <div class="text-center">
                  <button class="text-end text-lg font-bold text-white  bg-gradient-to-l from-cyan-600 to-blue-600  bg-blue-500 hover:bg-cyan-700 duration-1000 md:text-lg md:px-2 md:py-1 rounded-lg mt-6 hover:scale-125 px-2 mb-2">
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
