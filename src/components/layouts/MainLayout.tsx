import { ParentComponent } from "solid-js";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const MainLayout: ParentComponent = (props) => {
  return (
    <div class="bg-white">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
