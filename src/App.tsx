import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/global/root-layout'; 
import Home from '@/pages/home';
import  ProductDetail  from '@/pages/product-detail';
import ProductList from './pages/product-list';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkout';
import WishlistPage from './pages/wishlist';
import TrackingPage from './pages/tracking';
import ProfilePage from './pages/profile';
import ShopPage from './pages/shop';
import LoginPage from './pages/sign-in';
import SignupPage from './pages/sign-up';
import OTPPage from './pages/otp';
import { CategoryNavigation } from './components/local/category-navigation';
import CategoryPage from './pages/categories';
import UrbanStyleBrandPage from './pages/brand';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={ <ProductDetail
      product={{
        name: "Example Product",
        description: "This is a sample product description.",
        price: 99.99,
        originalPrice: 129.99,
        rating: 4,
        colors: [
          { name: "Red", value: "#ff0000" },
          { name: "Blue", value: "#0000ff" },
        ],
        sizes: ["S", "M", "L"],
        images: ["https://scontent.fsgn13-1.fna.fbcdn.net/v/t39.30808-6/469263878_566313332686293_1334102692280335270_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aBGCSIhi67kQ7kNvgGXwQx7&_nc_zt=23&_nc_ht=scontent.fsgn13-1.fna&_nc_gid=AA10fHzNo5IpA7Y4Y6PhuJr&oh=00_AYDskOg8dxi9JRPdHQs6Mt-4qaDkWTqLzAHOhLElqjlcqw&oe=675AEEB8", "https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/469119784_566314672686159_2856069700101748396_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=e_tSIVijuVYQ7kNvgFj7-pH&_nc_zt=23&_nc_ht=scontent.fsgn4-1.fna&_nc_gid=ALaxy6SKeEkv1F9r0MQHjrH&oh=00_AYD6Ui_3Wzoc3B-NPLTR8iZMPFKDIxbTlES_3hePLFS4Tw&oe=675ADBF5", "https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/469119784_566314672686159_2856069700101748396_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=e_tSIVijuVYQ7kNvgFj7-pH&_nc_zt=23&_nc_ht=scontent.fsgn4-1.fna&_nc_gid=ALaxy6SKeEkv1F9r0MQHjrH&oh=00_AYD6Ui_3Wzoc3B-NPLTR8iZMPFKDIxbTlES_3hePLFS4Tw&oe=675ADBF5"],
      }}
    />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/wishlist' element={<WishlistPage/>}/>
        <Route path='/tracking' element={<TrackingPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/sign-in' element={<LoginPage/>}/>
        <Route path='/sign-up' element={<SignupPage/>}/>
        <Route path='/otp' element={<OTPPage/>}/>
        <Route path='/cate' element={<CategoryPage/>}/>
        <Route path='/brand' element={<UrbanStyleBrandPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;

