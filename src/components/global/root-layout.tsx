import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer";

interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
          <Header />
          <main className="pb-24">{children}</main>
          <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
