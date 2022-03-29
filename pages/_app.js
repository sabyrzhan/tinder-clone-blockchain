import '../styles/globals.css'
import { TinderProvider } from "../context/TinderContext";
import { MoralisProvider } from "react-moralis";

const MORALIS_SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL
const MORALIS_APP_ID = process.env.NEXT_PUBLIC_MORALIS_APP_ID

function MyApp({ Component, pageProps }) {
  return (
      <MoralisProvider
          serverUrl={MORALIS_SERVER_URL}
          appId={MORALIS_APP_ID}
      >
          <TinderProvider>
              <Component {...pageProps} />
          </TinderProvider>
      </MoralisProvider>
  )
}

export default MyApp
