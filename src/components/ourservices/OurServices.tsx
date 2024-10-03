import { For } from "solid-js";

const OurServices = () => {
  const blogPosts = [
    {
      title: "UI / UX Services ",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2h8ZW58MHx8MHx8fDA%3D", // Replace with the actual image URL
      description:
        "Our UI/UX experts design interfaces that are both aesthetically pleasing and highly functional,",
      link: "/ui-ux-services",
    },
    {
      title: "Artificial Intelligence",
      image:
        "https://plus.unsplash.com/premium_photo-1675793714917-dd0f7efc0165?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QWklMjB0ZWNofGVufDB8fDB8fHww",
      description:
        "We specialize in developing AI solutions that can automate tasks, improve decision-making, and provide valuable insights.",
      link: "/ai-development-services",
    },
    {
      title: "Web Applications",
      image:
        "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Our web developers create responsive, scalable, and user-friendly websites and web applications tailored to your specific needs.",
      link: "/web-development-services",
    },
    {
      title: "Creating Mobile Experiences",
      image:
        "https://plus.unsplash.com/premium_photo-1683936163005-a506303344b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We design and develop native iOS and Android apps that offer exceptional performance and user engagement.",
      link: "/mobile-app-development-services",
    },
    {
      title: "Embedbbed Systems",
      image:
        "https://plus.unsplash.com/premium_photo-1714618990464-bb4ddc34c542?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Our engineers specialize in developing embedded systems for a wide range of devices, from IoT sensors to industrial automation systems.",
      link: "/embedded-systems-development-services",
    },
    {
      title: "AWS Cloud Services",
      image:
        "https://plus.unsplash.com/premium_photo-1683288706548-e8b6bb72fe86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We help businesses migrate to the cloud and optimize their infrastructure for performance, cost-effectiveness, and flexibility.",
      link: "/cloud-solutions-services",
    },
  ];

  return (
    <div class=" max-w-full shadow-xl md:py-14">
      <div class="flex justify-center text-5xl py-10 font-bold dark:text-white  text-black md:underline underline-offset-8 md:my-12  dark:hover:text-cyan-500 hover:text-cyan-500">
        Our Services{" "}
      </div>
      <div class="grid md:grid-cols-3 gap-7 grid-cols-2 dark:text-white ">
        <For each={blogPosts}>
          {(blog) => (
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
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </a>
          )}
        </For>
      </div>
    </div>
  );
};

export default OurServices;
{
  /* <div class="max-w-sm">
              <a
                href="/services"
                class=" md:p-4 flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  class=" absolute object-cover rounded-t-lg h-6 w-2 md:rounded-none md:rounded-s-lg md:h-16 md:w-16 -"
                  src={blog.image}
                  alt="loading..."
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class=" text-sm mb-2 md:text-2xl md:font-bold md:tracking-tight text-gray-900 dark:text-white">
                    {blog.title}
                  </h5>
                  <p class="mb-3 md:font-normal text-xs  text-gray-700 dark:text-gray-400">
                    {blog.description}
                  </p>
                </div>
              </a>
            </div> */
}
