import "./App.css";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";
import Services from "./components/Services";
import { Know } from "./components/Know";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Services />
      <Know />
      <Footer />
    </div>
  );
}

export default App;
