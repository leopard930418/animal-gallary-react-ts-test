import { Outlet } from "react-router-dom";
import Container from "./Container";
import Footer from "./footer";
import Header from "./header";
import SideMenu from "./side-menu";

export default function Layout() {
  return (
    <div className="overflow-x-hidden bg-dark-black sm:bg-medium-gray">
      <Header />
      <div className="">
        <SideMenu />
        <div className="ml-0 sm:ml-20">
          <Container>
            <Outlet />
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}
