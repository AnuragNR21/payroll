import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

import Homes from "./screens/Homes.js";
import PayrollCalendar from "./screens/Components/PayrollCalendar.js";

function App() {
  return (
       <BrowserRouter>
         <Routes>
          <Route path="/homes" element={<Homes />} />
          <Route path="/payrollCalendar" element={<PayrollCalendar />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
