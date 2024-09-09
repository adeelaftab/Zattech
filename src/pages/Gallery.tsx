import Products from "../components/Card/Products";
import Card from "../components/Card/Products";
import MainLayout from "../components/layouts/MainLayout";
import { projectMain } from "../services/Services";

const Gallery = () => {
  return (
    <MainLayout>
      <div class="min-h-screen flex flex-col">
        {" "}
        <main class="flex-grow">
          <div class="text-center text-3xl text-zinc-950 font-bold">
            This Is Gallery Page
          </div>
          <div class="text-3xl text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad harum,
            laudantium, rerum amet exercitationem earum dolor ducimus
            repudiandae explicabo veritatis nulla commodi quaerat voluptatum
            laboriosam neque, atque qui! Iste, quo?
          </div>
          <Products Project={projectMain} />
        </main>
      </div>
    </MainLayout>
  );
};

export default Gallery;
