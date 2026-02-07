// App.tsx
import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import "./App.css";
export default function App() {
  return (
    <HashRouter>
      <div className = "app">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
