import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
      <>
        <Head>
          <title>{headTitle ? headTitle : "tachyonlogistics.net"}</title>
        </Head>
      </>
    );
}

export default PageHead