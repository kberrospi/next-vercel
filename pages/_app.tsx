import { NextPage } from 'next'
import { AppProps } from 'next/app';
import '../styles/globals.css'

type NextPageWidthLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element; 
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWidthLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  //return <Component {...pageProps} />
  return getLayout( <Component {...pageProps} /> )

}

export default MyApp
