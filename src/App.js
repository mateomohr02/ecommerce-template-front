import "./App.css";
import { Routes, Route} from "react-router-dom";
import Store from "./views/Store";
import AdminDashboard from "./views/AdminDashboard";
import DetailProduct from "./views/DetailProduct"



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/storeadmin" element={<AdminDashboard />} />
        <Route exact path="/store/:id" element={<DetailProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
