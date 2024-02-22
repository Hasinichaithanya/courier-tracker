import { Routes, Route } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";

function Index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  );
}

export default Index;
