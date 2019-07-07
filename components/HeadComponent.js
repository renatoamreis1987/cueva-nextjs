import Head from 'next/head';

function HeadComponent() {
  return (
    <div>
      <Head>
        <title>Cueva de Kun y Hebles</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
    </div>
  );
}

export default HeadComponent;