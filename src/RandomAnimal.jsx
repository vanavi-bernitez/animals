const animals = [
  {
    title: "Cat",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1024px-Cat_August_2010-4.jpg",
  },
  {
    title: "Dog",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Retriever_in_water.jpg/800px-Retriever_in_water.jpg",
  },
  {
    title: "Bear",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg",
  },
  {
    title: "Horse",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg",
  },
  {
    title: "Owl",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Portrait_of_owls.jpg/442px-Portrait_of_owls.jpg",
  },
];

const RandomAnimal = () => {
  const index = Math.floor(Math.random() * 4) + 1;
  return (
    <div id="container">
      <h1>{animals[index].title}</h1>
      <img src={animals[index].src} />
    </div>
  );
};

export default RandomAnimal;
