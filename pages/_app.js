import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";
import NavBar from "../components/NavBar/NavBar";
import { imagechoice } from "@/img";


export default function App({ Component, pageProps }) {
  imagechoice();
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
