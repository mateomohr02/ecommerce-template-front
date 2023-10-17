import "./App.css";
import { Routes, Route} from "react-router-dom";
import Store from "./views/Store";
import AdminDashboard from "./views/AdminDashboard";
import DetailProduct from "./views/DetailProduct"
import Categories from "./views/Categories";
import NavBar from "./components/NavBar/Navbar";
import CategoryDetail from "./views/CategoryDetail";
import Brands from "./views/Brands"
import BrandDetail from "./views/BrandDetail"
import AdminProductAdder from "./components/Admin/AdminProductAdder"
import ProductEditor from "./views/ProductEditor.jsx"
import AdminBrands from "./views/AdminBrands";
import AdminCategories from "./views/AdminCategories";
import UserProfile from "./views/UserProfile";
import RegisterLogin from "./views/RegisterLogin";


function App() {
  return (
    <div className="App">

      <NavBar/>
      <Routes>

        {/* ROUTES FOR USERS */}
        <Route exact path="/categories/:id" element={<CategoryDetail/>}/>
        <Route exact path="/categories" element={<Categories/>}/>
        <Route exact path="/brands" element={<Brands/>}/>
        <Route exact path="/brands/:id" element={<BrandDetail/>}/>
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/store/:id" element={<DetailProduct/>}/>
        <Route exact path="/profile" element={<UserProfile/>}/>
        <Route exact path="/access" element={<RegisterLogin/>}/>
      



        {/* ROUTES FOR ADMINS */}

        <Route exact path="/storeadmin" element={<AdminDashboard />} />
        <Route exact path="/storeadmin/modify/:id" element={<ProductEditor/>}/>
        <Route exact path="/storeadmin/add" element={<AdminProductAdder/>}/>
        <Route exact path="/storeadmin/brand" element={<AdminBrands/>}/>
        <Route exact path="/storeadmin/categories" element={<AdminCategories/>}/>        
  
      </Routes>
    </div>
  );
}

export default App;
