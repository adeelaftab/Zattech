import MainLayout from "../components/layouts/MainLayout";
import Teams from "../components/Team/Teams";
import Clients from "../components/Carousel/Clients";
import Development from "../components/Card/Devlopment";
import Banner from "../components/Carousel/Banner";
import OurServices from "../components/ourservices/OurServices";
import Products from "../components/Card/Products";
import { MainPageProjects } from "../services/Services";
import { useNavigate } from "@solidjs/router";

const Home = () => {
  const navigate = useNavigate();
  const goToProducts = () => {
    navigate("/products");
  };
  return (
    <MainLayout>
      <div class="min-h-screen flex flex-col text-black">
        <main class="flex-grow pb-6 w-fit">
          <div class="max-w-full mx-auto px-4 sm:px-6 text-center">
            <Banner />
            <div class="md:mb-6 md:bg-slate-200 rounded-xl">
              <Clients />
            </div>
            <Development />
            <OurServices />
            <div class="my-12 md:my-24 shadow-2xl">
              <Products Project={MainPageProjects} />
              <span>
                <button
                  type="button"
                  onClick={goToProducts}
                  class="text-white focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 md:my-16  "
                >
                  View All
                </button>
              </span>
            </div>
            <div class="my-10">
              <Teams />
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Home;
