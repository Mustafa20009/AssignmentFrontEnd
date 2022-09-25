import { Provider } from "react-redux";
import Product from "./Pages/Product";
import store from "./store";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <Product />
      <ToastContainer autoClose={2000} />
    </Provider>
  );
}

export default App;
