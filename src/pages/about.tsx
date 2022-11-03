import React from 'react';
import About from '../components/about';
import Layout from '../components/layout';
import Meta from '../components/meta';

export default function Index() {
  return (
    <Layout>
      <Meta></Meta>
      <About animated={false} closeAbout={() => {}}></About>
    </Layout>
  )
}
