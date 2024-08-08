import MainHeader from "./main-header";
import Footer from "./footer";

const MainLayout = ({ children }) => (
  <>
    <MainHeader />
    {children}
    <Footer />
  </>
);

export default MainLayout;
