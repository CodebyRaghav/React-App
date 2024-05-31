import { Outlet } from "react-router-dom";
import MainHeader from "../components/Mainheader";
function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
