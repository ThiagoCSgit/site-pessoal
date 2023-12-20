import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function AboutMe() {
  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">
          Pleasure, i am <strong>Thiago</strong>
        </h1>
        <div className="mb-12">
          <h2 className={`${roboto.className} mb-12`}>
            I am a Front-end developer who loves creating interfaces and
            introducing new technologies!
          </h2>
          <Link
            href="/contacts"
            className="p-3 bg-t-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80"
          >
            Talk to me!
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
          <li
            style={{ backgroundColor: "#2f74c0", color: "#ffffff" }}
            className="w-fit lg:w-full text-center p-2 rounded-md"
          >
            TypeScript
          </li>
          <li
            style={{ backgroundColor: "#efd81d", color: "#000000" }}
            className="w-fit lg:w-full text-center p-2 rounded-md"
          >
            JavaScript
          </li>
          <li
            style={{ backgroundColor: "#6bddfa", color: "#000000" }}
            className="w-fit lg:w-full text-center p-2 rounded-md"
          >
            React
          </li>
          <li
            style={{ backgroundColor: "#5ed3f3", color: "#000000" }}
            className="w-fit lg:w-full text-center p-2 rounded-md"
          >
            React Native
          </li>
          <li
            style={{ backgroundColor: "#000000", color: "#ffffff" }}
            className="w-fit lg:w-full text-center p-2 rounded-md"
          >
            Next.JS
          </li>
          <li
            style={{ backgroundColor: "#41b883", color: "#000000" }}
            className="w-fit lg:w-full text-center p-2 rounded-md"
          >
            VueJS
          </li>
          <li
            style={{ backgroundColor: "#e75c22", color: "#ffffff" }}
            className="w-fit lg:w-full text-center p-2 rounded-md"
          >
            HTML5
          </li>
          <li
            style={{ backgroundColor: "#1097d0", color: "#ffffff" }}
            className="w-fit lg:w-full text-center p-2 rounded-md"
          >
            CSS3
          </li>
          <li
            style={{ backgroundColor: "#8210f5", color: "#ffffff" }}
            className="w-fit lg:w-full text-center p-2 rounded-md"
          >
            Bootstrap
          </li>
          <li
            style={{ backgroundColor: "#13b2b3", color: "#ffffff" }}
            className="w-fit lg:w-full text-center p-2 rounded-md"
          >
            Tailwind
          </li>
          <li
            style={{ backgroundColor: "#c76494", color: "#ffffff" }}
            className="w-fit lg:w-full text-center p-2 rounded-md"
          >
            SASS/SCSS
          </li>
        </ul>
      </div>
      <div className="relative">
        <Image
          src="https://media.licdn.com/dms/image/D4D03AQHSnCXeP8cEog/profile-displayphoto-shrink_800_800/0/1688385835567?e=1708560000&v=beta&t=OHUjNL3eHhqMB92kVFMENTfCNm5OUALgN8kgm7q_G0c"
          alt="Foto de perfil"
          width={500}
          height={500}
          unoptimized
          className="rounded-full"
        />
        <p className="p-4 w-fit text-base text-center leading-tight bg-t-blue-500 rounded-xl text-black absolute -bottom-[0.75rem] sm:bottom-3">
          <strong className="text-4xl">2+</strong>
          <br />
          anos de experiência
        </p>
      </div>
    </main>
  );
}
