import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { SingleHotel } from "./pages/hotel/SingleHotel";
import { HotelsList } from "./pages/hotels/HotelsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelsList />} />
        <Route path="/hotels/:id" element={<SingleHotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
