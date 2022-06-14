import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Pupdates from "./components/Pupdates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <AboutMe />
        <hr />
        <Portfolio />
        <hr />
        <Pupdates />
        <hr />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
