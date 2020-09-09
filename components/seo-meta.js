import Head from "next/head";

const Meta = (props) => (
  <React.Fragment>
    <Head>
      <title>
        {props.title ? props.title : "RealtyDAO"} &mdash; Realty DAO{" "}
      </title>
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/img/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/img/favicon-16x16.png'
      />

      <meta
        name='description'
        content={props.desc ? props.desc : "RealtyDAO"}
      />
      <meta property='og:type' content='website' />
      <meta
        name='og:title'
        property='og:title'
        content={props.desc ? props.desc : "RealtyDAO"}
      />
      <meta name='og:description' property='og:description' content='' />
      <meta property='og:site_name' content='' />
      <meta property='og:url' content='' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content='' />
      <meta
        name='twitter:description'
        content={props.desc ? props.desc : "RealtyDAO"}
      />
      <meta name='twitter:site' content='' />
      <meta name='twitter:creator' content='' />

      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap'
        rel='stylesheet'
      ></link>

      <script
        src='https://unpkg.com/react/umd/react.production.min.js'
        crossOrigin='anonymous'
      ></script>

      <script
        src='https://unpkg.com/react-dom/umd/react-dom.production.min.js'
        crossOrigin='anonymous'
      ></script>

      <script
        src='https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js'
        crossOrigin='anonymous'
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </Head>
  </React.Fragment>
);
export default Meta;
