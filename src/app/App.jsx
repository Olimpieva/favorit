import { MainPage } from "../pages";
import { Provider } from "react-redux";
import store from "../store/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./styles/index.css";

export function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}
