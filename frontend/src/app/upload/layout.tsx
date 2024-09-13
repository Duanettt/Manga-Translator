import NavBar from "../components/NavBar";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="layout">
      <section>{children}</section>
    </div>
  );
}
