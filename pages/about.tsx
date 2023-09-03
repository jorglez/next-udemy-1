import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import NavBar from "@/components/navBar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function about() {
  return (
    <>
      <Head>
        <title>test | about</title>
        <meta name="description" content="home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <NavBar />
      </main>
    </>
  );
}
