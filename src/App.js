import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import './App.css';
import Jugar from "./pages/jugar";
import Tablas from './pages/tablas';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tablas" element={<Tablas />} />
        <Route path="jugar" element={<Jugar />} />

        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p><Link to="/tablas">Tablas</Link></p>
      <p><Link to="/jugar">A Jugar</Link></p>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
