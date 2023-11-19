/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Link from "next/link";
import styles from "./media.module.scss";
import Header from "../../components/Header";

export default function bio() {
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
            HUUUM`s debut embodies the essence of Folk Futurism. Identifying as
            a band that reinterprets folklore in the present and envisions its
            role in the future, HUUUM recognizes folklore as a potent source of
            a community`s emotions—rage, desire, and sorrow. The band sees
            various dialects, dances, and tunes as a form of revolution,
            preserving elements that may one day be lost. Folklore music, shaped
            by times of war, oppression, uprising, and rebirth, continues to
            resonate. The region known as Iran today is a mosaic of diverse
            cultures and languages. HUUUM`s members express curiosity about
            delving into the music of this region, exploring its evolution
            through time, landscapes, history, and experimentalism. This debut
            album marks the beginning of HUUUM`s musical journey.
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

// <iframe
//   style={{
//     border: "0",
//     width: "350px",
//     height: "470px",
//   }}
//   src="https://bandcamp.com/EmbeddedPlayer/album=1892424989/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
//   seamless
// >
//   {/* <a href="https://accidentalmeetings.bandcamp.com/album/huuum">
//               HUUUM by HUUUM
//             </a> */}
// </iframe>;
