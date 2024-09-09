import MainLayout from "../components/layouts/MainLayout";
import OurServices from "../components/ourservices/OurServices";

const Services = () => {
  return (
    <div>
      <MainLayout>
        <main>
          <OurServices />
        </main>
        <div class="flex justify-center text-5xl p-48 text-black font-bold">
          new
        </div>
      </MainLayout>
    </div>
  );
};

export default Services;
