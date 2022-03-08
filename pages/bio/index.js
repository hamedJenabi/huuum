import Head from "next/head";
import Link from "next/link";
import styles from "./bio.module.scss";
import { GraphQLClient } from "graphql-request";

export default function bio({ bios }) {
  console.log("bios", bios);
  const { details } = bios[0];
  return (
    <div className={styles.container}>
      <Head>
        <title>HUUUM</title>
        <meta name="description" content="We are Huuum!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&family=Lato&family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.bio}>
          <div
            className={styles.details}
            dangerouslySetInnerHTML={{ __html: details?.html }}
          />
        </div>
        <div className={styles.titleWrapper}>
          <Link href="/">
            <p className={styles.title}>Home</p>
          </Link>
          {/* <p className={styles.title}>Concerts</p> */}
          {/* <p className={styles.title}>Contact</p> */}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/cl0idw0ly1sqw01w75uoyac9k/master"
  );

  const { bios } = await graphcms.request(
    `
    {
      bios {
        details {
          html
        }
        
      }
    }
	  `
  );

  return {
    props: {
      bios,
    },
  };
}
