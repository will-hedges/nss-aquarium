/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
  fish: [
    {
      name: "Inigo Montoya",
      length: 54,
      species: "Swordfish",
      location: "Destin, FL",
      food: "Fish Food",
    },
    {
      name: "Big Tuna",
      length: 37,
      species: "Tuna",
      location: "Scranton, PA",
      food: "Tuna Salad",
    },
    {
      name: "Jaws",
      length: 9,
      species: "Piranha",
      location: "Amazon Rainforest",
      food: "Fingers",
    },
    {
      name: "Nemo",
      length: 3,
      species: "Clown Fish",
      location: "Australia",
      food: "Fish Food",
    },
    {
      name: "Dory",
      length: 7,
      species: "Blue Tang",
      location: "Australia",
      food: "Fish Food",
    },
    {
      name: "Patrick",
      length: 5,
      species: "Star Fish",
      location: "Bikini Bottom",
      food: "Algae",
    },
    {
      name: "Angel",
      length: 8,
      species: "Angel Fish",
      location: "Beverly Hills, CA",
      food: "Vampires",
    },
    {
      name: "Goldilocks",
      length: 3,
      species: "Goldfish",
      location: "Petco",
      food: "Fish Food",
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
