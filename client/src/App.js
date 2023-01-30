import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { Routes } from 'react-router-dom';
import Product from './component/product';
// import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
