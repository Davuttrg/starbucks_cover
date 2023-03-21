import { Outlet } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/header/header";

function App() {
  return (
    <div className="app">
      <main>
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
