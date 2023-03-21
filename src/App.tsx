import { Outlet } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
