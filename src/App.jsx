import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Products from "./components/products/products/Products";
import LoginForm from "./pages/Auth/LoginForm";
import { About } from "./pages/statics/About";
import { Contact } from "./pages/statics/Contact";
import { Account } from "./pages/Account";
import { ProductDetails } from "./components/products/ProductDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Products/>}/> 
        <Route path="/login" element={<LoginForm/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/account" element={<Account/>}/> 
        <Route path="details/:id" element={<ProductDetails/>}/>
      </Routes>
    </Layout>
  );
}

export default App;

