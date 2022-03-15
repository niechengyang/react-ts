import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  SignInPage,
  RegisterPage,
  DetailPage,
  SearchPage,
  ShoppingCartPage,
  PlaceOrderPage,
} from "./pages";
import React, { useEffect } from "react";
import { useSelector } from "./redux/hooks";
import { useDispatch } from "react-redux";
import { getShoppingCart } from "./redux/shoppingCart/slice";
const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const RouteComponent = (props) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Navigate to="/signIn" />
    );
  };
  return <Route {...rest} element={<RouteComponent />}></Route>;
};
function App() {
  const jwt = useSelector((s) => s.user.token);
  debugger
  const dispatch = useDispatch();

  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt));
    }
  }, [jwt]);
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signIn/" element={<SignInPage />}></Route>
          <Route path="/register/" element={<RegisterPage />}></Route>
          <Route
            path="/detail/:touristRouteId"
            element={<DetailPage />}
          ></Route>
          <Route path="/search/" element={<SearchPage />}></Route>
          <Route path="/search/:keywords" element={<SearchPage />}></Route>
          <PrivateRoute
            isAuthenticated={jwt !== null}
            path="/shoppingCart"
            component={ShoppingCartPage}
          />
          <PrivateRoute
            isAuthenticated={jwt !== null}
            path="/placeOrder"
            component={PlaceOrderPage}
          />
          <Route path="*" element={<h1>404 not found 页面去火星了</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
