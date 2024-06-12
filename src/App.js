import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="login" exact Component={Login} />
  
     </Routes>
      </Router>
    </div>
  );
}

export default App;
