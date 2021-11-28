import "./App.css";
import Top from "./components/Top";
import About from "./components/About";
import Works from "./components/Works";
import ContactMe from "./components/ContactMe";
import Nav from "./components/Nav";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Top />
      <About />
      <Works id="Works" />
      <ContactMe id="ContactMe" />
    </div>
  );
}

export default App;
