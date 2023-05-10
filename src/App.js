import "./App.css";
import Navbar from "./components/Navbar";
import DataScreen from "./components/datascreen/DataScreen";

function App() {
  
  return (
    <div className="App">
      <Navbar title="QuadB Show Bookings"/>
      <DataScreen />
    </div>
  );
}

export default App;
