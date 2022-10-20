import "./categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.components";

import Home from "./routes/home/home.component";

const Shop = () => {
  return (
    <div>
      <h1>This is the shop</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
