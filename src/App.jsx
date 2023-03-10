import { Provider } from 'react-redux';

import { store } from './store/index.js';
import { Catalog } from "./components/Catalog/Catalog.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Navigation } from "./components/Navigation/Navigation.jsx";

export const App = () => {
  return (
    <Provider store={store}>
      <Header />

      <main>
        <Navigation />

        <Catalog />
      </main>

      <Footer />
    </Provider>
  );
};
