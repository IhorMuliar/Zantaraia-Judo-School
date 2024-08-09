import MainHeader from "./main-header";
import Footer from "./footer";

const MainLayout = ({ children }) => (
  <>
    <MainHeader />
    <main className="page-content bg-white">{children}</main>
    <Footer />
  </>
);

export default MainLayout;
