import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./root";
import { HomePage } from "./pages/home/page";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
