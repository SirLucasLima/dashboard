import airBnbClone1 from "../assets/projectsDev/airBnbClone1.png"
import airBnbClone2 from "../assets/projectsDev/airBnbClone2.png"
import metaversus1 from "../assets/projectsDev/metaversus1.png"
import metaversus2 from "../assets/projectsDev/metaversus2.png"
import notes1 from "../assets/projectsDev/notes1.png"
import notes2 from "../assets/projectsDev/notes2.png"
import portofolio1 from "../assets/projectsDev/portofolio1.png"
import portofolio2 from "../assets/projectsDev/portofolio2.png"
import socialMedia1 from "../assets/projectsDev/socialMedia1.png"
import socialMedia2 from "../assets/projectsDev/socialMedia2.png"

export const DevProjects = [
  {
    "img1": metaversus1,
    "img2": metaversus2,
    "title": "Metaversus - Front-End",
    "links": {
      "deploy": "https://metaversus-client.vercel.app/", 
      "frontend": "https://github.dev/developerlucaslima/metaversusCLIENT",
    },
    "description": "Landing page moderna com belas animações, estilizações e uma paleta de cores atraente. Foi uma das minhas primeiras experiências com as tecnologias Next.js, Tailwind.css e Framer Motion. Fiquei impressionado com o Next.js por oferecer suporte a server rendering e pretendo utilizá-lo em meus projetos futuros. Ao combinar essas tecnologias, pude aproveitar a facilidade de desenvolvimento do Tailwind e a capacidade do Framer Motion para adicionar animações personalizadas e transições suaves em componentes React. Além disso, Tailwind é altamente configurável, permitindo a personalização das classes de estilo para atender às necessidades específicas de cada projeto.",
    "date": "Janeiro de 2023",
    "techs": "Next.js, Tailwind.Css, Framer Motion"
  },
  {
    "img1": portofolio1,
    "img2": portofolio2,
    "title": "Portfolio - Front-End",
    "links": {
      "figma": "https://www.figma.com/file/PDaVtxDS6OrgqDCcf5mHf1/Untitled?node-id=0%3A1&t=Hf89f0Lkql7k1PyY-1",
      "deploy": "https://devlucaslima.vercel.app/", 
      "frontend": "https://github.dev/developerlucaslima/portfolioCLIENT/tree/master"
    },
    "description": "Este é o meu portfólio em constante aprimoramento. Como designer, dediquei especial atenção à interface para criar uma experiência agradável e funcional ao usuário. O projeto foi concebido para visualização sem rolagem, também reconheço que a responsividade é essencial e, por isso, estou trabalhando para adequá-lo ao conceito mobile first. Utilizei a ferramenta Vite na criação do projeto, mas estou considerando mudar para o Next.js a fim de aprimorar a performance e escalabilidade. Apesar de não ter utilizado um backend, optei por armazenar todos os dados em um objeto JavaScript ou JSON local.",
    "techs": "Figma, React.js, Vite, Styled Components"
  },
  {
    "img1": notes1,
    "img2": notes2,
    "title": "Notes - Full-Stack",
    "links": {
      "deploy": "https://metaversus-client.vercel.app/",
      "frontend": "https://github.dev/developerlucaslima/notesCLIENT",
      "backend": "https://github.dev/developerlucaslima/notesAPI",
    },
    "description": "Projeto final desenvolvido na trilha Explorer da RocketSeat. Foi meu primeiro projeto full-stack, onde tive meu primeiro contato com o lado do servidor e banco de dados, utilizando Node.js, SQLite e Knex.js. Durante o projeto, aprendi muito sobre programação orientada a objetos, arquitetura de software, rotas, criptografia, autenticação e utilização de query builders com suporte para vários bancos de dados SQL. No lado do cliente, utilizei React.js e também adquiri conhecimentos avançados sobre componentização, props e CSS-in-JS com Styled Components.",
    "date": "Outubro de 2022",
    "techs": "React.js, Vite, Styled Components, Node.js, SQLite, Knex.js, Express.js, JWT, Bcrypt.js"
  },
  {
    "img1": socialMedia1,
    "img2": socialMedia2,
    "title": "Rede Social - Full-Stack (Incompleto)",
    "links": {
      "deploy": "https://social-client-peach.vercel.app/", 
      "frontend": "https://github.dev/developerlucaslima/socialCLIENT/tree/master"
    },
    "description": "Estou trabalhando em um projeto de rede social semelhante ao Facebook. Inicialmente, segui uma videoaula no YouTube, mas fiz muitas modificações por conta própria, especialmente na estrutura de pastas e estilização, optei por usar uma arquitetura mais organizada com rotas separadas e uma paleta de cores diferente. Ainda estou trabalhando no back-end, já que a abordagem da videoaula que segui pareceu um pouco desatualizada. Isso também me permite colocar em prática meus conhecimentos e estou considerando o uso do Nest no back-end.",
    "techs": "React.js, Vite, Styled Components"
  },
  {
    "img1": airBnbClone1,
    "img2": airBnbClone2,
    "title": "AirBnb Clone - Front-End (Inconpleto)",
    "links": {
      "deploy": "https://airbnb-client-seven.vercel.app/", 
      "frontend": "https://github.dev/developerlucaslima/airbnbCLIENT/tree/main"
    },
    "description": "Estou desenvolvendo uma versão do site AirBnb com ênfase na responsividade, utilizando a biblioteca Tailwind para criar um site adaptável a diferentes tamanhos de tela. Além disso, estou utilizando a plataforma MapBox para exibir mapas personalizados e interativos, o que é um dos grandes diferenciais do projeto. Para gerenciar os dados do back-end, estou optando por utilizar uma API externa para acesso a informações atualizadas em tempo real, e alguns dados estão sendo armazenados localmente em um arquivo JSON para garantir a disponibilidade e rapidez no acesso às informações.",
    "techs": "Next.js, Typescript, Tailwind, MapBox, Geolib"
  }
]