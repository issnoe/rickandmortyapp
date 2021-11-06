import React, { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from 'lib/theme';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apollo';
import Header from 'components/shared/Header';
import NProgress from 'nprogress';
import Router from 'next/router';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const client = useApollo(pageProps.initialApolloState);
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`);
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
  NProgress.configure({ showSpinner: true });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
