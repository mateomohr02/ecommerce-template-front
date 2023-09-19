import "./App.css";
import { Routes, Route} from "react-router-dom";
import Store from "./views/Store";
import AdminDashboard from "./views/AdminDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/storeadmin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
