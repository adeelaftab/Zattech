import AboutSection from "../components/aboutsection/AboutSection";
import LifeAtZattech from "../components/aboutsection/LifeAtZattech";
import Contactfooter from "../components/footer/Contactfooter";
import MainLayout from "../components/layouts/MainLayout";
import { tabTitle } from "../services/Services";

const About = () => {
  tabTitle("Zattech | About");
  return (
    <MainLayout>
      <div class="container pt-4 px-8 `">
        <section class="flex flex-col md:mt-12">
          <div class="grid grid-cols-3 md:grid-cols-12 w-full">
            <div class=" flex col-span-1 md:col-span-4 justify-center">
              <img
                src="AboutUsLeft.png"
                alt="loading... "
                class="h-60 w-60 md:w-full md:h-full"
              />
            </div>
            <div class="col-span-1 md:col-span-4">
              <div class="flex flex-col justify-center">
                <div class="md:mt-20 text-lg md:text-4xl text-black font-bold text-center dark:text-white">
                  Welcome To {""}
                  <span class=" text-blue-500 font-extrabold">
                    {" "}
                    {""} Zattech
                  </span>
                </div>
                <p class="md:mt-20 mt-3 text-xs md:text-lg font-normal dark:text-white pl-12 text-wrap">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  sit dolorem, repellendus minima fugiat animi officiis dicta
                  voluptates rem doloribus sequi possimus ipsa aperiam fugit
                  quasi voluptatum aliquam ut beatae itaque earum sint quo enim
                  accusamus! Maiores libero sequi quasi.
                </p>
              </div>
            </div>
            <div class=" flex col-span-1 md:col-span-4 justify-center">
              {" "}
              <img
                src="AboutUsRight.png"
                alt="loading... "
                class="md:ml-28  md:h-full md:w-full h-60 w-60"
              />
            </div>
          </div>
        </section>
        <section class=" bg-gray-100 w-full dark:bg-black">
          <div class="container mx-auto dark:text-white ">
            <div class="flex flex-row lg:flex-row items-center justify-between gap-8 md:mb-36">
              <div class="lg:w-1/2">
                <img
                  src="Aboutus1.png"
                  alt="About Us"
                  class="md:w-full md:h-auto w-full h-full mr-48"
                />
              </div>{" "}
              <div class="lg:w-1/2 mb-14 ">
                <h2 class="text-lg md:text-4xl   font-bold text-gray-800 mt-9  dark:text-white">
                  About Us
                </h2>
                <p class="text-xs md:text-lg text-gray-600 mb-8 dark:text-white  my-4 md:my-10 text-wrap">
                  Zattech was established in 2009 with the vision to pave the
                  future of Pakistan in the technological sector. Along with its
                  own range of products, Zattech provides custom, turnkey
                  solutions to its clients to befit all their technical needs.
                  Zattech is a growing company with a strong work ethic and a
                  mindset to always help and support its clients even after
                  project completion.
                </p>
                <a
                  href="/services"
                  class=" bg-blue-500    text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
        <AboutSection />
        <LifeAtZattech />
      </div>
      <Contactfooter />
    </MainLayout>
  );
};

export default About;
