import Image from "next/image";
import HomeNavbar from "./components/user/Homepage/HomeNavbar";
import Banner from "./components/user/Homepage/Banner";
import CardVideoSection from "./components/user/Homepage/CardVideoSection";
import Footer from "./components/user/Homepage/Footer";

export default function Home() {
  return (
    <main className="">
      <HomeNavbar/>
      <Banner/>
      <CardVideoSection/>
      <Footer/>
    </main>
  );
}
