import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import makeStore from '@/lib/store'
import Head from 'next/head'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <div>
        <Head>
          <link href='/static/css/base.css' rel='stylesheet' />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </div>
    )
  }
}

export default withRedux(makeStore)(MyApp)
