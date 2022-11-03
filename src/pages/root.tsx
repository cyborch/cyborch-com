import React from 'react';
import Home from '../components/home';
import Layout from '../components/layout';
import Meta from '../components/meta';

export default function Index() {
  return (
    <Layout>
      <Meta></Meta>
      <Home></Home>
    </Layout>
  )
}
