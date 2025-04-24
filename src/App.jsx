import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DrivableFuel from './Components/DrivableFuel';
import FuelCost from './Components/FuelCost';
import FuelNeeded from './Components/FuelNeeded';
import PerKIlo from './Components/PerKIlo';
import Mileage from './Components/Mileage';

function App() {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={
          <div className="container py-4 px-3 text-center" style={{maxWidth:600}}>
            <h2 className="text-center mb-4">Cost Calculators</h2>
            <div className="d-grid gap-3 col-6 mx-auto">
              <Link to="/fuel-cost" className="btn btn-primary">Fuel Cost</Link>
              <Link to="/drivable-distance" className="btn btn-primary">Drivable Distance</Link>
              <Link to="/fuel-needed" className="btn btn-primary">Fuel Needed</Link>
              <Link to="/mileage" className="btn btn-primary">Mileage</Link>
              <Link to="/per-kilo" className="btn btn-primary">Cost Per Kilometer</Link>
            </div>
          </div>
        } />

     
        <Route path="/fuel-cost" element={<FuelCost />} />
        <Route path="/drivable-distance" element={<DrivableFuel />} />
        <Route path="/fuel-needed" element={<FuelNeeded />} />
        <Route path="/mileage" element={<Mileage />} />
        <Route path="/per-kilo" element={<PerKIlo />} />
      </Routes>
    </Router>
  );
}

export default App;
