import '../styles/globals.scss'
import Layout from "../components/layout";
import MainContent from "../components/main-content";

export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
          <MainContent/>
      </Layout>
  )
}
