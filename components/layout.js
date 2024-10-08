import Head from 'next/head'

export default function Layout(props) {

  return (
    <>
      <Head>
        <title>Sample title</title>
        <meta name="description" content="sample" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
        {props.children}
        </div>
      </main>
    </>
  )
}
