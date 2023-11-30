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
        <Header
          items={[
            { name: "Bio", link: "/bio" },
            { name: "Music", link: "/media" },
            { name: "Contact", link: "/contact" },
          ]}
        />
        <div className={styles.credit}>
          <div className={styles.bio}>
            <div className={styles.mail}>
              <p>e-mail:</p>
              <Link href="mailto:odarvishi@hotmail.com">
                <p> odarvishi@hotmail.com</p>
              </Link>
              <Link
                href="https://www.instagram.com/__huuum___"
                passHref
                target="_blank"
              >
                <Image
                  style={{ marginTop: "16px" }}
                  src="/instagram.png"
                  alt="instagram"
                  width={35}
                  height={35}
                />
              </Link>
            </div>
            <div className={styles.details}>
              <p>Credits:</p>
              <p> Painting: Hosna Darvishi</p>
              <p>
                Website: {"      "}
                <Link target="_blank" href="https://hamedjenabi.me">
                  Hamed Jenabi
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
