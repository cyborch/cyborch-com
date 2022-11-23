import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  const ld = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Anders Borch",
    "url": "https://cyborch.com/",
    "sameAs": [
      "https://linkedin.com/in/cyborch",
      "https://mastodon.cyborch.com/@anders",
      "https://www.facebook.com/anders.cyborch",
      "https://www.instagram.com/cyborch/",
      "https://github.com/cyborch",
      "https://keybase.io/cyborch"
    ]
  }
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet" />
        <script type="text/javascript" src="https://secure.skypeassets.com/i/scom/js/skype-uri.js"></script>
        {props.headComponents}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} ></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        { /* hidden mastodon backlink for verification purposes */ }
        <div style={{display: 'none'}}>
          <a rel="me" href="https://mastodon.cyborch.com/@anders">Mastodon</a>
        </div>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
