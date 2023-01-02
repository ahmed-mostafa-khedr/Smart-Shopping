import "./css/App.css";
import NavbarLoginCompo from "./Components/utilities/NavbarLoginCompo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TypesPage from "./Pages/TypesPage";
import PopularPages from "./Pages/PopularPages";
import ShoppingPage from "./Pages/ShoppingPage";
import LoginPage from "./Pages/AuthPages/LoginPage";
import RegisterPage from "./Pages/AuthPages/RegisterPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              localStorage.getItem("email") ? (
                <NavbarLoginCompo
                  loginState={` ${localStorage
                    .getItem("uname")
                    .trim()
                    .toUpperCase()}`}
                />
              ) : (
                <NavbarLoginCompo loginState="تسجيل الدخول" />
              )
            }
          >
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/categories" element={<TypesPage />} />
            <Route path="/popular" element={<PopularPages />} />
            <Route path="/products" element={<ShoppingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
