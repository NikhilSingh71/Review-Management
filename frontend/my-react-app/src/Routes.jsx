import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReviewManagement from "./pages/ReviewManagement";
import AddEditReview from "./pages/AddEditReview";

const RivewRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReviewManagement />} />
          <Route path="/add-review" element={<AddEditReview />} />
          <Route path="/edit-review/:id" element={<AddEditReview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RivewRoutes;
