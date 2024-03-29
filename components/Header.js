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
        <Link href="/">
          <Image
            className={styles.logo}
            src="/logo.jpeg"
            alt="logo icon"
            width={30}
            height={30}
          />
        </Link>
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
    </>
  );
};

export default Header;
