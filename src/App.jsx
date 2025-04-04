import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import "./mid-2000s-school-theme.css";
import { retroTheme } from "@/shared/config/styles";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider theme={retroTheme}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
