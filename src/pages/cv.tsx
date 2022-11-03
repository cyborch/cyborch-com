import React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import './cv.styl';

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <meta
            http-equiv="refresh"
            content={`0;url=/cv.pdf`}
        />
      </Helmet>
      <div id="cv">
        <p>
          Download should begin immediately, if not, then 
          press <a href="/cv.pdf" download>here</a>.
        </p>
      </div>
    </Layout>
  )
}
