import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Leadership from "./components/Leadership";
import Locations from "./components/Locations";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin && !user) {
    return <Login onSuccess={() => setShowLogin(false)} />;
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar user={user} onLoginClick={() => setShowLogin(true)} onLogout={logout} />
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