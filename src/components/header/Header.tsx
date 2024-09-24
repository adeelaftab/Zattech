import { AiOutlineClose, AiOutlineMenu } from "solid-icons/ai";
import { createSignal } from "solid-js";

const Header = () => {
  const [Isopen, Setisopen] = createSignal(false);

  return (
    <nav class="flex items-center flex-wrap bg-white mr-12">
      <a href="/" class="mt-2 pl-2 md:pl-10 md:mr-4 inline-flex items-center">
        <img
          src="logo.png"
          alt="Loading...."
          class=" md:h-20 h-20 hover:scale-125 duration-1000 lg:pt-2 "
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
        class={`lg:top-navbar lg:inline-flex lg:flex-grow lg:w-auto ${
          Isopen()
            ? "absolute bg-white right-2 top-16 w-60 z-50 min-w-[160px] shadow-md md:mr-"
            : "hidden"
        }`}
        id="navigation"
      >
        <div class="sm:inline-flex lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto lg:pt-2">
          <a
            href="/"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-cyan-500  hover:underline underline-offset-8 md:hover:scale-125 duration-1000"
          >
            <span class="font-bold text-xl">Home</span>
          </a>
          <a
            href="/about"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-cyan-500  hover:underline underline-offset-8  md:hover:scale-125 duration-1000"
          >
            <span class="font-bold text-xl">About</span>
          </a>
          <a
            href="/services"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-cyan-500  hover:underline underline-offset-8   md:hover:scale-125 duration-1000"
          >
            <span class="font-bold text-xl">Services</span>
          </a>
          <a
            href="/gallery"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-cyan-500  hover:underline underline-offset-8   md:hover:scale-125 duration-1000"
          >
            <span class="font-bold text-xl">Gallery</span>
          </a>
          <a
            href="/products"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-cyan-500  hover:underline underline-offset-8   md:hover:scale-125 duration-1000"
          >
            <span class="font-bold text-xl">Products</span>
          </a>
          <a
            href="/contact"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center text-custom-green hover:text-cyan-500 md:hover:scale-125 duration-1000"
          >
            <span class="font-bold text-xl md:border-4 md:border-cyan-500 md:px-2">
              Contact Us
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Header;
