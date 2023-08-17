import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>test | home</title>
        <meta name="description" content="home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>
          Ir a{" "}
          <Link
            href={{
              pathname: "/about",
              query: { postalCode: "01030", colonia: "magueyes" },
            }}
          >
            About
          </Link>
        </h1>
      </main>
    </>
  );
}
