import Head from "next/head";
import { Inter } from "next/font/google";
import Main from "../components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ChatMemo</title>
        <meta
          name="description"
          content="Messaging application"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <div className="w-full h-dvh">
        <Main />
      </div>
    </>
  );
}
