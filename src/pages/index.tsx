import { Inter } from "next/font/google";
import Head from "next/head";
import AboutMe from "../components/Home/AboutMe";
import Projects from "@/components/Home/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const projects = [
    {
      slug: "https://www.linkedin.com/posts/thiago-corr%C3%AAa-dos-santos-a19baa212_finalmente-lembrei-de-colocar-isso-aqui-activity-7125918228945510400-lZs0?utm_source=share&utm_medium=member_desktop",
      name: "Produsca",
      description:
        "Produsca is a product price consultation app for supermarkets, developed with React Native and Expo. It allows users to search for products in specific supermarkets, or even for a complete list of products, returning to users the registered supermarkets where it will be possible to make that purchase and the total value of it. Products and supermarkets are registered or updated by reading the QR Code on invoices, made in the app, which also saves that purchase on the history screen. This application aims to help its users save money and time when searching for the most affordable products.",
      images: [
        {
          url: "https://media.licdn.com/dms/image/D4D22AQEZjbeDrpei7w/feedshare-shrink_1280/0/1698951296916?e=1706140800&v=beta&t=U-BhevLvd8nzMEDwjLAdry_jdpCaECGSqmEu1QMjrOM",
          alt: "Categoria de Produtos",
        },
        {
          url: "https://media.licdn.com/dms/image/D4D22AQFy21yLOUY6cA/feedshare-shrink_1280/0/1698951296671?e=1706140800&v=beta&t=UWaDMMRZ_I7aqsiSuCJW1kW6_kgKClVh4qf37ZfUIrs",
          alt: "Supermercados Próximos",
        },
        {
          url: "https://media.licdn.com/dms/image/D4D22AQFbdrHyQ2dR4A/feedshare-shrink_1280/0/1698951296313?e=1706140800&v=beta&t=v06bEOaYTSyOwGaH5fMVzH-JxJSUP7x-ykBFcg6zENI",
          alt: "Supermercados Disponíveis para Compra",
        },
        {
          url: "https://media.licdn.com/dms/image/D4D22AQG9_WgJxzidOA/feedshare-shrink_1280/0/1698951297032?e=1706140800&v=beta&t=PLtvC6dqpvn3LMAJPjQQIkQOOLJU_vbmBVJtZHe0ZLs",
          alt: "Histórico de Compras",
        },
      ],
    },
    {
      slug: "https://github.com/ThiagoCSgit/mp-gerenciador-habitos-next",
      name: "Habit Manager",
      description:
        "Habit manager using React, Next, Typescript and Tailwind, allowing the creation of new habits and generating calendars where it is possible to mark whether or not the habit was fulfilled.",
      images: [
        {
          url: "/images/gereciador-habitos.png",
          alt: "Telas do sistema",
        },
      ],
    },
    {
      slug: "https://github.com/ThiagoCSgit/PongGame",
      name: "Pong Game",
      description: "Atari pong game made with HTML, CSS and JS.",
      images: [
        {
          url: "/images/iniciar-pong.png",
          alt: "Iniciar jogo",
        },
        {
          url: "/images/jogando-pong.png",
          alt: "Jogando",
        },
      ],
    },
    {
      slug: "https://github.com/ThiagoCSgit/rpg-game",
      name: "RPG Game",
      description:
        "Simple RPG map, which allows the character to move and collide with obstacles on the map.",
      images: [
        {
          url: "/images/rpg-game.png",
          alt: "Jogo",
        },
      ],
    },
    {
      slug: "https://github.com/ThiagoCSgit/imc-calculator",
      name: "BMI Calculator",
      description: "BMI calculator application using React Native.",
      images: [
        {
          url: "/images/imc-calculando.jpeg",
          alt: "Formulário",
        },
        {
          url: "/images/imc-resultado.jpeg",
          alt: "Resultado",
        },
        {
          url: "/images/imc-lista-resultados.jpeg",
          alt: "Lista de resultados anteriores",
        },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>About me | Thiago</title>
        <meta
          name="description"
          content="I'm a Front-end developer who loves creating interfaces and introducing new technologies!"
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe />
        <Projects projects={projects} />
      </div>
    </>
  );
}
