import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Products from "./components/products/products/Products";
import LoginForm from "./pages/Auth/LoginForm";
import { About } from "./pages/statics/About";
import { Contact } from "./pages/statics/Contact";
import { Account } from "./pages/Account";
import { ProductDetails } from "./components/products/ProductDetails";
import { useContext, useEffect } from "react";
import { gState } from "./context/Context";
import { login } from "./services/authentication.service";
import Loading from "./components/UI/Loading";

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  const navigate = useNavigate()
  const {setData} = useContext(gState)

  const loginUser = async (userData) => {
    const user = await login(userData)
    setData((prevState)=>{
      return{
        ...prevState,
        isLoggedIn: true,
        userData: user
      }
    })
    navigate('/')
  }

  useEffect(()=>{
    if (isLoggedIn) {
      const userData = JSON.parse(localStorage.getItem('userData'))
      loginUser(userData)
    }
  }, [isLoggedIn])

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

// Today's Tasks to add to your product project : 
//  - add routing to your app [DONE]
// - add contact us page containt input for email and textarea to the message
// - add about us page [DONE]
// - add Todos page to contain all Products -> API : https://dummyjson.com/products [DONE]
// - add Todo Details Page that contain Product Details -> API : https://dummyjson.com/products/{PRODUCT ID} [DONE]
// - add Navbar and Footer [DONE]
// - show (Products , aboutus , contact us) pages after user logged in [DONE]
// - add user Settings page that contain all user data -> API : https://dummyjson.com/users/{USER ID} [DONE]