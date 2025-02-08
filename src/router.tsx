import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./root";
import { GamePage } from "./pages/game/page";
import { ShopPage } from "@/pages/shop/page";
import { TasksPage } from "@/pages/tasks/page";
import { FriendsPage } from "@/pages/friends/page";
import { Profile } from "./pages/profile/page";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<GamePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="friends" element={<FriendsPage />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
