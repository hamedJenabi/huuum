"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Image from "next/image";

const Header = ({ items = [] }) => {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.titleWrapper}>
        <Link href="/" className={styles.websiteTitle}>
          HUUUM
        </Link>
        {items.map((item) => (
          <Link
            href={item.link}
            key={item.link}
            className={classNames(styles.title, {
              [styles.active]: item.link === pathname,
            })}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <Link
        href="https://www.instagram.com/__huuum___"
        className={styles.instagram}
        passHref
        target="_blank"
      >
        <Image src="/instagram.png" alt="instagram" width={35} height={35} />
      </Link>
    </>
  );
};

export default Header;
