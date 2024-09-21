const Contactfooter = () => {
  return (
    <div class=" flex flex-col w-full bg-gradient-to-l from-cyan-500 to-blue-600 text-white py-6 gap-4 justify-between ">
      <h1 class="text-center text-3xl">Ready To Talk?</h1>
      <p class="text-center mb-4">
        Our team is here to answer your questions about StartP
      </p>
      <div class="flex justify-center">
        <a href="/contact" class="mr-4 md:px-10 md:py-2 bg-white text-black">
          Contact Us
        </a>
        <button class="bg-transparent text-white ">
          Get started now with a free trial
        </button>
      </div>
      <p class="text-center mt-4">
        More than 1.5 million businesses and organizations use StartP
      </p>
    </div>
  );
};

export default Contactfooter;
