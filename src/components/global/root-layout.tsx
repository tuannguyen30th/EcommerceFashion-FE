import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { ScrollToTop } from "../local/scroll-to-top";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pb-24">
          <Outlet />
        </main>

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
