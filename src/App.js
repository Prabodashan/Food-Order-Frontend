import "./Styles/Global.css";

import Header from "./Components/Containers/Header";
import Search from "./Components/Containers/Search";
import ShoppingCart from "./Components/Containers/ShoppingCart";
import Hero from "./Components/Containers/Hero";
import Category from "./Components/Containers/Category";

const App = () => {
  return (
    <>
      <Header />
      {/* <Search />
      <ShoppingCart /> */}
      <Hero />
      <Category />
    </>
  );
};

export default App;
