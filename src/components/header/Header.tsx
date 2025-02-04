import { useLocation } from "@solidjs/router";
import { AiOutlineClose, AiOutlineMenu } from "solid-icons/ai";
import { createEffect, createSignal, onCleanup } from "solid-js";
import DarkModeToggle from "../../signals/DarkModeToggle";
import { RiArrowsArrowDropDownLine } from "solid-icons/ri";

const Header = () => {
  const [Isopen, Setisopen] = createSignal(false);
  const location = useLocation();
  const [hasShadow, setHasShadow] = createSignal(false);

  createEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    onCleanup(() => window.removeEventListener("scroll", handleScroll));
  });
  return (
    <nav
      class={`bg-white dark:bg-black md:fixed md:top-0 md:z-50 md:w-full flex items-center flex-wrap mr-12 transition-shadow duration-300 ${
        hasShadow() ? "shadow-lg" : ""
      }`}
    >
      <a href="/" class="mt-3 pl-2 md:pl-10 md:mr-4 inline-flex items-center">
        <img
          src="logo.png"
          alt="Loading...."
          class=" md:h-20 h-20 hover:scale-125 duration-1000 mb-3"
        />
      </a>
      <button
        class=" lg:hidden text-black inline-flex  ml-auto hover:text-black-500  hover:underline underline-offset-8   hover:scale-125 duration-1000 outline-none nav-toggler text-2xl gap-20"
        data-target="#navigation"
        onClick={() => Setisopen(!Isopen())}
      >
        {Isopen() ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      <div
        class={` lg:top-navbar lg:inline-flex lg:flex-grow lg:w-auto ${
          Isopen()
            ? "absolute bg-white dark:bg-black right-2 top-16 w-60 z-50 min-w-[160px] shadow-md md:mr-"
            : "hidden"
        }`}
        id="navigation"
      >
        <div class="sm:inline-flex lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  justify-between space-x-8 flex flex-col lg:h-auto lg:pt-2 lg:pr-24 ">
          <a
            href="/"
            class={
              location.pathname === "/"
                ? "underline underline-offset-8 text-cyan-600 active lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  items-center justify-center hover:text-cyan-500  md:hover:scale-125 duration-1000"
                : " dark:text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-cyan-500  md:hover:scale-125 duration-1000"
            }
          >
            <span class="font-bold text-xl">Home</span>
          </a>
          <a
            href="/about"
            class={
              location.pathname === "/about"
                ? " underline underline-offset-8 text-cyan-600 active lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  items-center justify-center hover:text-cyan-500  md:hover:scale-125 duration-1000"
                : "  dark:text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-cyan-500  md:hover:scale-125 duration-1000"
            }
          >
            <span class="font-bold text-xl">About</span>
          </a>
          <div class="relative group">
            <a
              href="/services"
              class={
                location.pathname === "/services"
                  ? "underline underline-offset-8 text-cyan-600 active lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-cyan-500 md:hover:scale-125 duration-1000"
                  : "dark:text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-cyan-500 md:hover:scale-125 duration-1000"
              }
            >
              <span class="font-bold text-xl flex">
                Services <RiArrowsArrowDropDownLine size={30} />
              </span>
            </a>

            <div class="absolute left-0 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md mt-2 w-48">
              <a
                href="/services/web-development"
                class="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Web Development
              </a>
              <a
                href="/services/mobile-apps"
                class="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Mobile Apps
              </a>
              <a
                href="/services/seo"
                class="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                SEO Optimization
              </a>
            </div>
          </div>
          <a
            href="/products"
            class={
              location.pathname === "/products"
                ? "underline underline-offset-8 text-cyan-600 active lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-cyan-500  md:hover:scale-125 duration-1000"
                : " dark:text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-cyan-500  md:hover:scale-125 duration-1000"
            }
          >
            <span class="font-bold text-xl">Products</span>
          </a>
          <a
            href="/contact"
            class={
              location.pathname === "/contact"
                ? "underline underline-offset-8 active  dark:text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-cyan-500  md:hover:scale-125 duration-1000"
                : " dark:text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-cyan-500  md:hover:scale-125 duration-1000"
            }
          >
            <span class="font-bold text-xl">Contact us</span>
          </a>
        </div>
        <div class="px-4 text-2xl">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};
export default Header;
