import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Leadership from "./components/Leadership";
import Locations from "./components/Locations";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      <Properties />
      <Services />
      <Benefits />
      <Leadership />
      <Locations />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
