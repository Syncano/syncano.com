import React from 'react';
import Helmet from 'react-helmet';
import config from './config/';
import { Analytics } from './components/';

const BUILD_TIME = new Date().getTime();

export default React.createClass({
  render() {
    const head = Helmet.rewind();
    const attrs = head.htmlAttributes.toComponent();

    return (
      <html
        lang="en"
        {...attrs}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {process.env.NODE_ENV !== 'development' && <link rel="stylesheet" href={`/styles.css?t=${BUILD_TIME}`} />}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,700" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/plugins/line-numbers/prism-line-numbers.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism-twilight.min.css" />
          <link rel="apple-touch-icon" sizes="57x57" href={require('./images/favicons/apple-touch-icon-57x57.png')} />
          <link rel="apple-touch-icon" sizes="60x60" href={require('./images/favicons/apple-touch-icon-60x60.png')} />
          <link rel="apple-touch-icon" sizes="72x72" href={require('./images/favicons/apple-touch-icon-72x72.png')} />
          <link rel="apple-touch-icon" sizes="76x76" href={require('./images/favicons/apple-touch-icon-76x76.png')} />
          <link rel="apple-touch-icon" sizes="114x114" href={require('./images/favicons/apple-touch-icon-114x114.png')} />
          <link rel="apple-touch-icon" sizes="120x120" href={require('./images/favicons/apple-touch-icon-120x120.png')} />
          <link rel="apple-touch-icon" sizes="144x144" href={require('./images/favicons/apple-touch-icon-144x144.png')} />
          <link rel="apple-touch-icon" sizes="152x152" href={require('./images/favicons/apple-touch-icon-152x152.png')} />
          <link rel="apple-touch-icon" sizes="180x180" href={require('./images/favicons/apple-touch-icon-180x180.png')} />
          <link rel="icon" type="image/png" href={require('./images/favicons/favicon-32x32.png')} sizes="32x32" />
          <link rel="icon" type="image/png" href={require('./images/favicons/android-chrome-192x192.png')} sizes="192x192" />
          <link rel="icon" type="image/png" href={require('./images/favicons/favicon-96x96.png')} sizes="96x96" />
          <link rel="icon" type="image/png" href={require('./images/favicons/favicon-16x16.png')} sizes="16x16" />
          <link rel="manifest" href={require('./images/favicons/manifest.json')} />
          <link rel="mask-icon" href={require('./images/favicons/safari-pinned-tab.svg')} color="#0070d3" />
          {head.link.toComponent()}
          <meta name="msapplication-TileColor" content="#0070d3" />
          <meta name="msapplication-TileImage" content={require('./images/favicons/mstile-144x144.png')} />
          <meta name="theme-color" content="#ffffff" />
          <script dangerouslySetInnerHTML={{__html:`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:108213,hjsv:5};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
          `}}></script>
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <Analytics writeKey={config.analyticsKey} />
          <script src="https://cdn.jsdelivr.net/g/prism@1.5.0(prism.js+components/prism-clike.min.js+components/prism-c.min.js+components/prism-objectivec.min.js+components/prism-java.min.js+components/prism-javascript.min.js+components/prism-swift.min.js+components/prism-cpp.min.js+components/prism-python.min.js+components/prism-ruby.min.js+plugins/line-numbers/prism-line-numbers.min.js)" />
          <script src={`/bundle.js?t=${BUILD_TIME}`} />
          <script async src="//platform.twitter.com/widgets.js" charSet="utf-8" />
        </body>
      </html>
    );
  }
});
