import Image from "next/image";
import bgImage from "../public/media/bg.jpg";
import Header from "./Header";
import PrivacyBanner from "./PrivacyBanner";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <div className="bgImage">
      <Image src={bgImage} alt="Background" priority />
    </div>
    <div className="layout">
      <Header className="header" />
      <main id="app" data-testid="layout">
        <div className="container">{children}</div>
      </main>
      <PrivacyBanner />
      <Footer />
    </div>
  </>
);

export default Layout;
