import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';




class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>My Landing Page</title>
                </Head>
                <body className={roboto.variable}>
                    <Component {...pageProps} />
                </body>
                
            </>
        );
    }
}

export default MyApp;