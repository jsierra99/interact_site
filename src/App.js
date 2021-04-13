import Header from "./components/Header";
import "./app.scss";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
   <>
    <Header />
    <Home />
    <Features />
    <About />
    <Services />
    <Gallery />
    <Reviews />
    <Team />
    <Contact />
    <Footer />
   </>
  );
}

export default App;
