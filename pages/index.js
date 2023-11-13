import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { GraphQLClient } from "graphql-request";

export default function Home() {
  return (
    <div>
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
      <main className={styles.backgroundContainer}>
        {/* <Image
          src="/omid-bg.jpg"
          alt=""
          layout="fill"
          className={styles.full}
        /> */}
        <Link href="/">
          <p className={styles.websiteTitle}>HUUUM</p>
        </Link>
        <div className={styles.titleWrapper}>
          <Link href="/bio">
            <p className={styles.title}>Bio</p>
          </Link>
          <Link href="/media">
            <p className={styles.title}>Music</p>
          </Link>
          <Link href="mailto:Odarvishi@hotmail.com">
            <p className={styles.title}>Contact</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
