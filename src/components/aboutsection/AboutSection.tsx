const AboutSection = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-9">
      <div class="bg-white dark:bg-black shadow-2xl">
        <h2 class="mx-5 text-xl md:text-3xl font-semibold text-black dark:text-white">
          Our History
        </h2>
        <p class="mx-5 my-4 text-xs md:text-lg text-pretty text-black dark:text-white">
          Zattech was established in 2009 with the vision to pave the future of
          Pakistan in the technological sector. Along with its own range of
          products, Zattech provides custom, turnkey solutions to its clients to
          befit all their technical needs. Zattech is a growing company with a
          strong work ethic and a mindset to always help and support its clients
          even after project completion.
        </p>
      </div>
      <div class="bg-white shadow-2xl  dark:bg-black">
        <h2 class="mx-5 text-xl md:text-3xl font-semibold  text-black  dark:text-white">
          Our Mission
        </h2>
        <p class="mx-5 my-4 text-xs md:text-lg text-pretty text-black  dark:text-white">
          At Zattech, we are driven by a passion for innovation and a commitment
          to our clients. Since 2009, we have been at the forefront of
          Pakistan's technological landscape, delivering cutting-edge solutions
          tailored to meet the unique needs of our customers. Our expertise lies
          in providing a comprehensive range of services, from custom software
          development to turnkey IT solutions. With a strong emphasis on
          quality, reliability, and customer satisfaction, we strive to exceed
          expectations and foster long-lasting partnerships.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
