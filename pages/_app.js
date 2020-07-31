import { Provider } from "react-redux";
import { store } from "../redux/index";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
