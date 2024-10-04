import ContactForm from "../components/Card/ContactForm";
import MainLayout from "../components/layouts/MainLayout";
import { tabTitle } from "../services/Services";

const Contact = () => {
  tabTitle("Zattech | Contact");
  return (
    <div>
      <MainLayout>
        <div class="min-h-screen  md:pt-24 pt-12">
          <ContactForm />
        </div>
      </MainLayout>
    </div>
  );
};

export default Contact;
