import Navbar from "./components/navbar";
import { Routes, Route} from "react-router-dom";
import Store from "./components/store";
import Game from "./components/game";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Game />}></Route>
        <Route path="/store" element={<Store />}></Route>
      </Routes>
    </>
  );
}

export default App;
