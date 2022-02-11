export const list = [
  {
    id: 30,
    name: "Cafe con Leche",
    stock: 100,
    cost: 140,
    description: "Semejante al cortado, el café con leche supone la incorporación de leche al café, solo que en esta ocasión se utiliza una proporción igual o semejante del lácteo y el café. ",
    image: [
      "https://coffee.alexflipnote.dev/XhnwvLYqwGI_coffee.png"
    ],
    createdAt: "2021-09-18T05:11:04.952Z",
    updatedAt: "2021-09-18T19:39:05.347Z",
  },
  {
    id: 29,
    name: "Lungo o Largo",
    stock: 100,
    cost: 140,
    description: "El conocido como café largo es un tipo de café en el que la extracción de agua en contacto con los granos de café se realiza de manera más prolongada, lo que conlleva una mayor cantidad de infusión.",
    image: [
      "https://coffee.alexflipnote.dev/iiZGCFVk9J8_coffee.jpg"
    ],
    createdAt: "2021-09-18T05:11:04.952Z",
    updatedAt: "2021-09-18T19:39:05.347Z",
  },
  {
    id: 76,
    name: "Cafe Americano",
    stock: 92,
    cost: 575,
    description: "El café americano es un tipo de café derivado del espresso el cual se caracteriza por añadir una cantidad de agua mucho mayor de lo habitual en este tipo de preparación.",
    image: [
      "https://coffee.alexflipnote.dev/MEuF0xYidoA_coffee.png"
    ],
    createdAt: "2021-09-18T05:11:04.952Z",
    updatedAt: "2021-09-20T16:10:21.030Z",
  },
  {
    id: 170,
    name: "Cortado o Macchiato",
    stock: 100,
    cost: 600,
    description: "Uno de los más demandados por lo general, llamamos cortado o macchiato a un tipo de café espresso a la cual se le agrega una ligera cantidad de leche, que manche o tiña el café.",
    image: [
      "https://coffee.alexflipnote.dev/DVtipaUzfok_coffee.png"
    ],
    createdAt: "2021-09-18T05:11:04.952Z",
    updatedAt: "2021-09-20T16:10:21.032Z",
  },
  {
    id: 233,
    name: "Ristretto",
    stock: 100,
    cost: 500,
    description: "Esta variante del espresso se caracteriza por tener la misma cantidad de café que el anterior pero emplear para ello una proporción menor de agua.",
    image: [
      "https://coffee.alexflipnote.dev/17H1XvXYka0_coffee.png"
    ],
    createdAt: "2021-09-18T05:11:04.952Z",
    updatedAt: "2021-09-20T16:10:21.031Z",
  },
  {
    id: 139,
    name: "Cafe Negro",
    stock: 100,
    cost: 490,
    description: "Uno de los tipos de café más básicos y sencillos, únicamente consta de un infusión de café la cual se realiza hirviendo agua en contacto con el grano. ",
    image: [
      "https://coffee.alexflipnote.dev/YmPR18MKgm4_coffee.jpg"
    ],
    createdAt: "2021-09-18T05:11:04.952Z",
    updatedAt: "2021-09-20T16:10:21.030Z",
  },
  {
    id: 68,
    name: "Capuchino",
    stock: 89,
    cost: 200,
    description: "El capuchino es otro de los cafés más habituales, siendo semejante al café con leche con la excepción de que en este caso solo encontraremos alrededor de un tercio de café, siendo el resto leche.",
    image: [
      "https://coffee.alexflipnote.dev/rZrZPJu1Gck_coffee.jpg"
    ],
    createdAt: "2021-09-18T05:11:04.952Z",
    updatedAt: "2021-09-20T16:10:21.032Z",
  },
  {
    id: 222,
    name: "Mocca",
    stock: 100,
    cost: 1000,
    description: "Se trata de una variante del café con leche en el que además de leche y café se emplea obligatoriamente chocolate o cacao en forma de sirope o polvo.",
    image: [
      "https://coffee.alexflipnote.dev/i1SZuKIViF4_coffee.jpg"
    ],
    createdAt: "2021-09-18T05:11:04.952Z",
    updatedAt: "2021-09-20T16:10:21.032Z",
  }
];

export const getList = (data, timeout) => new Promise((response) =>
  setTimeout(() => {
    response(data)
  }, timeout)
);