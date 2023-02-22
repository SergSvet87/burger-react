import { Catalog } from "./components/Catalog/Catalog.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Navigation } from "./components/Navigation/Navigation.jsx";

export const App = () => {
  return (
    <div classNameName="wrapper">
      <Header />

      <main>
        <Navigation />

        <Catalog />
      </main>

      <Footer />
    </div>
  );
};
