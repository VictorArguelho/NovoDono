import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "@pages/Home/Home";
import Ad from "@pages/Ad/Ad";
import NotFound from "@pages/NotFound/NotFound";
import { CreateAds } from "./utils/PlaceholdersCreator";

export default function App() {
  CreateAds();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/ad/:id' element={<Ad />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
