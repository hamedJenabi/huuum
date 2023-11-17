/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>HUUUM</title>
        <meta name="description" content="We are Huuum!" />
        <link rel="icon" href="/fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&family=Lato&family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.backgroundContainer}>
        <Header
          items={[
            { name: "Bio", link: "/bio" },
            { name: "Music", link: "/media" },
            { name: "Contact", link: "mailto:odarvishi@hotmail.com" },
          ]}
        />
      </main>
    </div>
  );
}
