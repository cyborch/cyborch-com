import React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <meta
            http-equiv="refresh"
            content={`0;url=/qr.jpg`}
        />
      </Helmet>
      <p></p>
    </Layout>
  )
}
