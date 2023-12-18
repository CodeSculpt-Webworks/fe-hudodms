import "./App.css";
import { Navbar, IOform } from "./components";
import { MandaueBridge } from "./assets";

function App() {
  return (
    <div className="main">
      <img
        className="mandaue-bridge"
        src={MandaueBridge}
        alt="mandaue-bridge"
      />
      <Navbar />
      <IOform />
    </div>
  );
}

export default App;
