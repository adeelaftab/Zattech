import ContactForm from "../components/Card/ContactForm";
import MainLayout from "../components/layouts/MainLayout";

const Contact = () => {
  return (
    <div>
      <MainLayout>
        <div class="min-h-screen pt-12">
          <ContactForm />
        </div>
      </MainLayout>
    </div>
  );
};

export default Contact;
