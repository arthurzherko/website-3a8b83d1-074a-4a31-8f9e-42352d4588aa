import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Facts } from "./pages/facts";
import { Memes } from "./pages/memes";
import { SillyNav } from "./components/silly-nav";

const Routes = () => (
  <>
    <SillyNav />
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/facts" element={<Facts />} />
      <Route path="/memes" element={<Memes />} />
    </RouterRoutes>
  </>
);

export { Routes };