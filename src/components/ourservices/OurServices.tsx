import { For } from "solid-js";

const OurServices = () => {
  const blogPosts = [
    {
      title: "Crafting Intuitive User Experiences",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2h8ZW58MHx8MHx8fDA%3D", // Replace with the actual image URL
      description:
        "Our UI/UX experts design interfaces that are both aesthetically pleasing and highly functional, ensuring a seamless user experience.",
      link: "/ui-ux-services",
    },
    {
      title: "Harnessing the Power of Artificial Intelligence",
      image: "https://unsplash.com/photos/image-id-2",
      description:
        "We specialize in developing AI solutions that can automate tasks, improve decision-making, and provide valuable insights.",
      link: "/ai-development-services",
    },
    {
      title: "Building Engaging Web Applications",
      image: "https://unsplash.com/photos/image-id-3",
      description:
        "Our web developers create responsive, scalable, and user-friendly websites and web applications tailored to your specific needs.",
      link: "/web-development-services",
    },
    {
      title: "Creating Mobile Experiences That Delight",
      image: "https://unsplash.com/photos/image-id-4",
      description:
        "We design and develop native iOS and Android apps that offer exceptional performance and user engagement.",
      link: "/mobile-app-development-services",
    },
    {
      title: "Powering Smart Devices",
      image: "https://unsplash.com/photos/image-id-5",
      description:
        "Our engineers specialize in developing embedded systems for a wide range of devices, from IoT sensors to industrial automation systems.",
      link: "/embedded-systems-development-services",
    },
    {
      title: "Leveraging the Cloud for Scalability and Efficiency",
      image: "https://unsplash.com/photos/image-id-6",
      description:
        "We help businesses migrate to the cloud and optimize their infrastructure for performance, cost-effectiveness, and flexibility.",
      link: "/cloud-solutions-services",
    },
  ];

  return (
    <div class="shadow-xl md:py-14">
      <div class="flex justify-center text-5xl py-10 font-bold text-black md:underline underline-offset-8 md:my-12 hover:text-cyan-500">
        Our Services{" "}
      </div>
      <div class="grid md:grid-cols-2 gap-7 md:pl-24  ">
        <For each={blogPosts}>
          {(blog) => (
            <div class="">
              <a
                href="/services"
                class=" md:p-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover rounded-t-lg h-96  md:rounded-none md:rounded-s-lg md:h-16 md:w-16 -"
                  src={blog.image}
                  alt="loading..."
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog.title}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {blog.description}
                  </p>
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
