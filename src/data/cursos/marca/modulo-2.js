export const modulo2Data = {
  header: {
    title: "Arquetipos de Marca",
    description: "Descubre los 12 arquetipos de personalidad de Carl Jung y empareja marcas famosas con su esencia.",
    icon: "Users"
  },
  mentor: {
    name: "Alex",
    role: "Psicólogo de Marcas",
    avatar: "/assets/images/avatars/avatarHost2.svg",
    intro: "Toda gran marca se siente como una persona real porque se basa en un “Arquetipo”, un patrón de personalidad universal que todos reconocemos inconscientemente."
  },
  archetypes: [
    {
      id: "mago",
      name: "El Mago",
      description: "Transforma la realidad, promete magia, visión y resultados extraordinarios.",
      brands: ["Disney", "Tesla"],
      color: "bg-purple-600"
    },
    {
      id: "sabio",
      name: "El Sabio",
      description: "Busca la verdad, valora el conocimiento y se posiciona como el experto indiscutible.",
      brands: ["Google", "BBC"],
      color: "bg-blue-600"
    },
    {
      id: "heroe",
      name: "El Héroe",
      description: "Supera los obstáculos, inspira valentía y te reta a ser mejor.",
      brands: ["Nike", "FedEx"],
      color: "bg-orange-600"
    },
    {
      id: "rebelde",
      name: "El Rebelde",
      description: "Rompe las reglas, desafía el status quo y es disruptivo por naturaleza.",
      brands: ["Ferrari", "Virgin"],
      color: "bg-red-600"
    }
  ],
  gameData: {
    instruction: "Arrastra la marca famosa hacia su arquetipo correspondiente.",
    matches: [
      { brand: "Disney", archetypeId: "mago", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqbOjYX--x7PvRQorsOux6fRhgEHdyRCl0zLXHUYKXwupZgCi4jRpd9b44Gwaw7lCvAXux6Y&s=10" },
      { brand: "Google", archetypeId: "sabio", logo: "https://i.pinimg.com/1200x/3c/17/cc/3c17ccb25d186e2dfc74aa764d34d907.jpg" },
      { brand: "Nike", archetypeId: "heroe", logo: "https://img.icons8.com/color/1200/nike.jpg" },
      { brand: "Ferrari", archetypeId: "rebelde", logo: "https://i.pinimg.com/736x/d3/5c/39/d35c3906c2f1e0a91689d2453d6ed572.jpg" }
    ]
  }
};
