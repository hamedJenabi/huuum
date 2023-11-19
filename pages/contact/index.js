import Head from "next/head";
import Link from "next/link";
import styles from "./contact.module.scss";
import Header from "../../components/Header";
import Image from "next/image";
export default function Contact() {
  return (
    <div className={styles.container}>
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

      <main className={styles.main}>
        <div className={styles.bio}>
          <p className={styles.details}>
            <strong>EMAIL:</strong>
            <Link href="mailto:odarvishi@hotmail.com">
              odarvishi@hotmail.com
            </Link>
          </p>
        </div>
        <div className={styles.credit}>
          <p className={styles.details}> Painting: Hosna Darvishi</p>
          <p className={styles.details}>
            Website:
            <Link target="_blank" href="https://hamedjenabi.me">
              Hamed Jenabi
            </Link>
          </p>
        </div>
        <Header
          items={[
            { name: "Bio", link: "/bio" },
            { name: "Music", link: "/media" },
            { name: "Contact", link: "/contact" },
          ]}
        />
      </main>
    </div>
  );
}
