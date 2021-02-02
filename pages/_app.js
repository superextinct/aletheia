import App from "next/app"
import React, { useState } from "react"
import { Provider, Context } from "../components/context"
import Navigation from "../components/Navigation"
import "../styles/globals.scss"
 
export default class MyApp extends App {
  static async getStaticProps({ Component, router, ctx }) {
    let pageProps = {}
 
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Navigation />

        <Provider>
            <Component {...pageProps} />
        </Provider>
      </>
    )
  }
}