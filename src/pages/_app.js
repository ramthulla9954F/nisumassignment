import "@/styles/globals.css";
import { wrapper } from "@/redux/Store";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
