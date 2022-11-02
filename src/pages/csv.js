import React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import './csv.styl';

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <meta
            http-equiv="refresh"
            content={`0;url=/cv.csv`}
        />
      </Helmet>
      <div id="csv">
        <p>
          Download should begin immediately, if not, then 
          press <a href="/cv.csv" download>here</a>.
        </p>
      </div>
    </Layout>
  )
}
