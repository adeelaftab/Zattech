const Contactfooter = () => {
  return (
    <div class="flex flex-col w-full bg-gradient-to-l from-cyan-500 to-blue-600 text-white py-6 gap-4 justify-between">
      <h1 class="text-center  text-xl md:text-3xl font-bold">
        Ready to Connect?
      </h1>
      <p class="text-center  text-xs md:text-lg mb-4">
        We're excited to hear from you! Whether you have a question, need
        advice, or want to start a project, our team is ready to assist.
      </p>
      <div class="flex justify-center gap-4">
        <a
          href="/contact"
          class="mr-4 md:px-10 md:py-2 px-6 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
        <button class="bg-transparent text-white border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
          Get Started Now
        </button>
      </div>
      <p class="text-center text-sm mt-4">
        © 2024 Zattech - Empowering Innovation Together
      </p>
    </div>
  );
};

export default Contactfooter;
