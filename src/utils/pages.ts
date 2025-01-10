import RootLayout from "@/components/global/root-layout";
import { ROUTES } from "@/constants/routes";
import { webSiteReview } from "@/data/product";
import CartPage from "@/pages/cart";
import CategoryPage from "@/pages/categories";
import CheckoutPage from "@/pages/checkout";
import HomePage from "@/pages/home";
import OTPPage from "@/pages/otp";
import ProductDetailPage from "@/pages/product-detail";
import ProductListPage from "@/pages/product-list";
import ProfilePage from "@/pages/profile";
import ShopPage from "@/pages/shop";
import LoginPage from "@/pages/sign-in";
import SignupPage from "@/pages/sign-up";
import RegisterShopPage from "@/pages/sign-up-shop-account";
import TrackingPage from "@/pages/tracking";
import WebsiteReviewsPage from "@/pages/website-review";
import WishlistPage from "@/pages/wishlist";

export const PAGES = [
  {
    path: ROUTES.HOME,
    element: HomePage,
    layout: RootLayout,
  },
  {
    path: ROUTES.OTP,
    element: OTPPage,
    layout: null,
  }, {
    path: ROUTES.PRODUCT_LIST,
    element: ProductListPage,
    layout: RootLayout,
  }, {
    path: ROUTES.CATEGORY,
    element: CategoryPage,
    layout: RootLayout,
  },
  {
    path: ROUTES.PRODUCT_DETAIL,
    element: ProductDetailPage,
    layout: RootLayout,
  },
  {
    path: ROUTES.CART,
    element: CartPage,
    layout: RootLayout,
  },
  {
    path: ROUTES.CHECKOUT,
    element: CheckoutPage,
    layout: RootLayout,
  },
  {
    path: ROUTES.WISH_LIST,
    element: WishlistPage,
    layout: RootLayout,
  }, {
    path: ROUTES.TRACKING,
    element: TrackingPage,
    layout: RootLayout,
  }, {
    path: ROUTES.PROFILE,
    element: ProfilePage,
    layout: RootLayout,
  }, {
    path: ROUTES.SHOP,
    element: ShopPage,
    layout: RootLayout,
  }, {
    path: ROUTES.CATEGORY,
    element: CategoryPage,
    layout: RootLayout,
  }, {
    path: ROUTES.WEB_REVIEW,
    element: WebsiteReviewsPage,
    layout: RootLayout,
  }, {
    path: ROUTES.REGISTER_SHOP,
    element: RegisterShopPage,
    layout: RootLayout,
  },
  {
    path: ROUTES.SIGN_IN,
    element: LoginPage,
    layout: null,
  },
  {
    path: ROUTES.SIGN_UP,
    element: SignupPage,
    layout: null,
  },
];
