console.log("Server File");

const express = require("express");
const server = express();
const { getRandomItem } = require("./utils/random");

server.use(express.static("public"));

server.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

const jokesList = [
  { id: 1, joke: "What do you call an ant who fights crime? A vigilanty!" },
  { id: 2, joke: "What is fast, loud and crunchy? A rocket chip!" },
  {
    id: 3,
    joke: "Why did the teddy bear say no to dessert? Because she was stuffed.",
  },
  { id: 4, joke: "What has ears but cannot hear? A cornfield." },
  {
    id: 5,
    joke: "What did the left eye say to the right eye? Between us, something smells!",
  },
  {
    id: 6,
    joke: "Why did the police play baseball? He wanted to get a catch!",
  },
  {
    id: 7,
    joke: "What did the microwave say to the other microwave? Is it just me? Or is it really hot in here?",
  },
  {
    id: 8,
    joke: "Why did the student eat his homework? Because the teacher told him it was a piece of cake!",
  },
  {
    id: 9,
    joke: "What is brown, hairy and wears sunglasses? A coconut on vacation",
  },
  {
    id: 10,
    joke: "What did the Dalmatian say after lunch? That hit the spot!",
  },
  {
    id: 11,
    joke: "Why did the kid cross the playground? To get to the other slide.",
  },
  { id: 12, joke: "How does a vampire start a letter? Tomb it may concern..." },
  {
    id: 13,
    joke: "What do you call a droid that takes the long way around? R2 detour.",
  },
  {
    id: 14,
    joke: "How do you stop an astronaut’s baby from crying? You rocket!",
  },
  { id: 15, joke: "Why was 6 afraid of 7? Because 7, 8, 9" },
  { id: 16, joke: "What is a witch’s favorite subject in school? Spelling!" },
  { id: 17, joke: "How do you make a lemon drop? Just let it fall." },
  {
    id: 18,
    joke: "What did the limestone say to the geologist? Don’t take me for granite!",
  },
  {
    id: 19,
    joke: "What do you call a duck that gets all A’s? A wise quacker.",
  },
  {
    id: 20,
    joke: "Why does a seagull fly over the sea? Because if it flew over the bay, it would be a baygull.",
  },
  { id: 21, joke: "What kind of water cannot freeze? Hot water." },
  { id: 22, joke: "What kind of tree fits in your hand? A palm tree!" },
  {
    id: 23,
    joke: "Why did the cookie go to the hospital? Because he felt crummy.",
  },
  { id: 24, joke: "How do you talk to a giant? Use big words!" },
  { id: 25, joke: "What falls in winter but never gets hurt? Snow!" },
];

server.get("/jokes", (req, res) => {
  res.send(jokesList);
});

server.get("/jokes/:id", (req, res) => {
  const id = +req.params.id;

  const [joke] = jokesList.filter((joke) => joke.id === id);
  res.send(joke);
});

server.get("/random", (req, res) => {
  const randomJoke = getRandomItem(jokesList);
  res.send(randomJoke);
});

server.listen(5000);
