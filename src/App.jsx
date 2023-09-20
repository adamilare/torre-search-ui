import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <section className="m-section">
        <Outlet />
      </section>
    </>
  );
}

export default App;
