import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SignInPage, RegisterPage, DetailPage } from "./pages";
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signIn/" element={<SignInPage />}></Route>
          <Route path="/register/" element={<RegisterPage />}></Route>
          <Route path="/detail/:touristRouteId" element={<DetailPage />}></Route>
          <Route path="*" element={<h1>404 not found 页面去火星了</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
