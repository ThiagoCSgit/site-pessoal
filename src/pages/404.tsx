import { Roboto } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 | Thiago</title>
      </Head>
      <div className="text-center mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
        <h1 className="text-5xl sm:text-7xl font-bold">404</h1>
        <p className="flex flex-col space-y-8 md:space-y-8 items-center md:text-xl">
          <span>Ops... Page not found</span>
          <Link
            href="/"
            className={`${roboto.className} p-4 bg-t-blue-500 rounded-xl text-black w-fit hover:opacity-80 md:text-xl`}
          >
            Click here to go to home page
          </Link>
        </p>
      </div>
    </>
  );
}
