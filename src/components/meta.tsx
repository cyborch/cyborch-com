import React from 'react';
import { Helmet } from 'react-helmet';

export default function Meta() {
  return (
    <Helmet>
      <meta name='og:url' content='https://cyborch.com/' />
      <meta name='og:title' content='Anders Borch' />
      <meta name='og:image' content='https://cyborch.com/background.jpg' />
      <meta name='og:image:width' content='2048' />
      <meta name='og:image:height' content='1536' />
      <meta name='profile:first_name' content='Anders' />
      <meta name='profile:last_name' content='Borch' />
      <meta name='profile:gender' content='male' />
      <title>Anders Borch</title>
    </Helmet>
  )
}
