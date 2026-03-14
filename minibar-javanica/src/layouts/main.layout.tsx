import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  );
}
