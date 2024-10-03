import { Route, Router } from "@solidjs/router";
import { createEffect, lazy } from "solid-js";
import { dark } from "./signals/Signal";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const App = () => {
  createEffect(() => {
    const darkMode = dark();
    localStorage.setItem("dark-mode", darkMode ? "true" : "false");
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
  return (
    <div>
      <Router>
        <Route>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Route>
      </Router>
    </div>
  );
};

export default App;
