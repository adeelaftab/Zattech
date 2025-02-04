import MainLayout from "../components/layouts/MainLayout";
import Teams from "../components/Team/Teams";
import Clients from "../components/Carousel/Clients";
import Development from "../components/Card/Devlopment";
import Banner from "../components/Carousel/Banner";
import OurServices from "../components/ourservices/OurServices";
import Products from "../components/Card/Products";
import { tabTitle } from "../services/Services";
import Swiper from "../components/Card/Swiper";
import { projects } from "../signals/Projects";

const Home = () => {
  tabTitle("Home");

  return (
    <MainLayout>
      <div class="px-4 sm:px-6 md:px-10">
        <div class="min-h-screen flex flex-col text-black">
          <main class="flex-grow pb-6">
            <div class="max-w-full mx-auto">
              <Banner />

              <div class="my-6 bg-slate-100 dark:bg-slate-800 rounded-xl p-4">
                <Clients />
              </div>

              <div class="my-6">
                <OurServices />
                <Development />
              </div>

              <div class="block md:hidden my-6">
                <Swiper />
              </div>

              <div class="hidden md:block md:my-24 ">
                <Products Product={projects} />
                <div class="mt-6 flex justify-center">
                  <a
                    href="/products"
                    class="bg-black dark:bg-slate-200 dark:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5"
                  >
                    View All
                  </a>
                </div>
              </div>

              <div class="my-10">
                <Teams />
              </div>
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
