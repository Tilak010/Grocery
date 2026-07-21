import { Toaster } from "react-hot-toast"
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage"
import Product from "./pages/Products"
import SearchResults from "./pages/SearchResults"
import FlashDeals from "./pages/FlashDeals"
import CheckOut from "./pages/checkOut"
import MyOrders from "./pages/MyOrders"
import OrderTracking from "./pages/OrderTracking"
import Addresses from "./pages/Addresses"
import ProtectedRoutes from "./components/ProtectedRoutes"
import AdminLayout from "./pages/admin/AdminLayout";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminProductForm from "./pages/admin/AdminProductForm";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminDeliveryPartners from "./pages/admin/AdminDeliveryPartners";
import DeliveryLogin from "./pages/delivery/DeliveryLogin";
import DeliveryLayout from "./pages/delivery/DeliveryLayout";
import DeliveryDashboard from "./pages/delivery/DeliveryDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";


export const App = () => {
  return (
    <>
    <Toaster position="top-right" toastOptions={{duration: 3000,style:{
      background: "#1B3022" , color: "#fff",borderRadius:"12px",fontSize:"14px"
    }}}/>
    <Routes>
         {/*Auth pages - No navbar/footer */}
         <Route path='/login' element={<Login />}/>
         {/* Main pages - With navbar/footer*/}
         <Route path='/' element={<AppLayout/>}>
             <Route index element={<Home />}/>
             <Route path="products" element={<Product />}/>
             <Route path="products/:id" element={<ProductPage />}/>
             <Route path="search" element={<SearchResults />}/>
             <Route path="deals" element={<FlashDeals />}/>
             <Route element={<ProtectedRoutes />}>
               <Route path="checkout" element={<CheckOut />}/>
               <Route path="orders" element={<MyOrders />}/>
               <Route path="orders/:id" element={<OrderTracking />}/>
               <Route path="addresses" element={<Addresses />}/>
             </Route>
         </Route>
         {/* ADMIN */}
         <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="products/new" element={<AdminProductForm />} />
           <Route path="products/:id/edit" element={<AdminProductForm />} />
            <Route path="orders" element={<AdminOrders />} />
           <Route path="delivery-partners" element={<AdminDeliveryPartners />} />
            </Route>

         {/* Delivery partner pages */}
         <Route path="/delivery/login" element={<DeliveryLogin/>}/>
         <Route path="/delivery" element={<DeliveryLayout/>}>
         <Route index element={<DeliveryDashboard/>} />
         </Route>
      </Routes>
    </>
  )
}
