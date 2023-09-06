const animals = [
  { 
    name: "cat", 
    sound: "meow",
    feed: {
      food: 2,
      water: 3
    }
  },
  { name: "dog", sound: "woof" },
  { sound: "meow" }
];

function useAnimals(animal){
  return [
    animal.name,
    function() {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export {useAnimals};