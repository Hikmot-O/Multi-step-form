import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Thankyou from "./components/Thankyou";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Info />} />
          <Route path="/info" element={<Info />} />
          <Route path="/plans" element={<Plan />} />
          <Route path="/add-ons" element={<AddOns />} />
          <Route path="/summary" element={<Summary />} />
          <Route path='/thankyou' element={<Thankyou />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
