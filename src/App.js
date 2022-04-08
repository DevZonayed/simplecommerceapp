import "./style/GlobalCss.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello js</h1>
      <h2>Hello React </h2>
      <p>Hey there we are developer</p>
      <Router>
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
