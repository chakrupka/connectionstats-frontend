import ReactDOM from "react-dom/client";
import { Provider, useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import store from "./stores/store.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
