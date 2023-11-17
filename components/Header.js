"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Header = ({ items = [] }) => {
  const pathname = usePathname();

  return (
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
  );
};

export default Header;
