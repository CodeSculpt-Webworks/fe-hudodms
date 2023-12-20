import "./App.css";
import { Navbar, Navtab } from "./components";
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
      <br />
      <Navtab />
    </div>
  );
}

export default App;
