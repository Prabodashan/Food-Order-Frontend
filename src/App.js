import "./Styles/Global.css";

import Header from "./Components/Containers/Header";
import Search from "./Components/Containers/Search";
import ShoppingCart from "./Components/Containers/ShoppingCart";

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <ShoppingCart />
    </>
  );
};

export default App;
