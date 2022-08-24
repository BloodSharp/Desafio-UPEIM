import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontpage from "./pages/frontpage";
import AddEmployees from "./pages/add-employees";
import ListEmployees from "./pages/list-employees";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/add-employees" element={<AddEmployees />} />
        <Route path="/list-employees" element={<ListEmployees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
