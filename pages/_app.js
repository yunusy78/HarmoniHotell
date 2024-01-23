// pages/_app.js

import Layout from '../layout/Layout';

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>;
}
