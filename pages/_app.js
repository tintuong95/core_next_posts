// Import Swiper styles
import Head from "next/head.js";
import "swiper/css";
import "swiper/css/pagination";
import { wrapper } from "../stores/store.js";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default wrapper.withRedux(MyApp);
