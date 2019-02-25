import { Fragment } from 'react'
import Head from 'next/head'

export default ({ children }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
    <main style={{fontFamily: 'sans-serif'}}>
      { children }
    </main>
  </Fragment>
)