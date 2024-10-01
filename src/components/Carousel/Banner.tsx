const Banner = () => {
  return (
    <div class="min-h-screen md:max-w-full md:grid grid-cols-12 gap-10">
      <div class="grid col-span-6 text-center ">
        <div class="max-w-full bg-white-800 text-5xl text-black  text-start md:mt-40 mt-7 md:flex md:flex-wrap">
          Your Vision, Realized Through
          <span class=" text-blue-600 font-bold">{""}Crafted Solutions </span>
          with Zattech !
        </div>

        <p class="text-black text-lg mt-3 md:text-xl text-start md:py-4">
          Our meticulously crafted solutions are designed to seamlessly align
          with your overarching business objectives, ensuring that your
          technology investments deliver maximum value.
        </p>
        <div class="flex flex-row  gap-7 md:gap-9  md:pr-12 pt-3 md:mt-4 ">
          <div class="flex flex-col items-center justify-center">
            <h1 class="text-black text-3xl font-bold">15+</h1>
            <span class="text-gray-500 my-2">Years of Experience</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <h1 class="text-black text-3xl font-bold">100+</h1>
            <span class="text-gray-500 my-2">Satisfied Clients</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <h1 class="text-black text-3xl font-bold">50+</h1>
            <span class="text-gray-500 my-2 ">Products Published</span>
          </div>
        </div>
        <div class="md:mb-28 text-start ">
          <a
            href="/contact"
            class="text-lg font-bold text-white  bg-gradient-to-l from-cyan-600 to-blue-600  bg-blue-500 hover:bg-cyan-700 duration-1000 md:text-xl md:px-2 md:py-2 rounded-lg mt-6 hover:scale-125 px-2"
          >
            Get Started
          </a>
        </div>
      </div>
      <div class="grid col-span-6 md:pb-10">
        <img src="bg.png" alt="loading..." class="h-auto w-auto" />
      </div>
    </div>
  );
};

export default Banner;
