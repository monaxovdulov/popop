import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./root";
import { GamePage } from "./pages/game/page";
import { ShopPage } from "@/pages/shop/page";
import { Tasks } from "./pages/tasks/page";
import { Friends } from "./pages/friends/page";
import { Profile } from "./pages/profile/page";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="shop" element={<ShopPage />} />
        <Route path="tasks" element={<Tasks />} />
        <Route index element={<GamePage />} />
        <Route path="friends" element={<Friends />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
