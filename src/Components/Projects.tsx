import Card from "./Card.tsx";

import perfectstart from "../img/perfectstart.jpg";
import personalsite from "../img/screenshot.jpg";

export default function Projects() {
  return (
    <div
      className="flex justify-start items-center min-h-screen flex-col"
      id="projects"
    >
      <section className="py-10">
        <h1 className="md:text-4xl text-2xl font-bold text-center">
          cool projects i made!!
        </h1>
        <section className="flex md:flex-row py-5 flex-col">
          <Card
            cardLink="https://github.com/dumpiez/personal-site"
            cardImage={personalsite}
            cardName="This Website!"
            cardDescription="The website you're on is considered one of my projects!"
          />
          <Card
            cardLink="https://github.com/dumpiez/perfect-start"
            cardImage={perfectstart}
            cardName="Perfect Start"
            cardDescription="A perfect start screen for your browser with customizability and freedom!"
          />
          <Card
            cardLink="https://github.com/dumpiez/tachylite"
            cardName="Tachylite (WIP)"
            cardDescription="A note-taking app inspired by Obsidian!"
          />
          <Card
            cardLink="https://github.com/dumpiez/okane"
            cardName="Okane (WIP)"
            cardDescription="An Android Money Manager App that Doesn't Look Boring!"
          />
        </section>
      </section>
    </div>
  );
}
