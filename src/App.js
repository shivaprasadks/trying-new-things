import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FileStructureApp from "./component/fileStructure";

export default function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/FileExplorer">File Explorer</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/FileExplorer" element={<FileStructureApp />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
