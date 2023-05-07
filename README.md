<h1 align="center">Filmify</h1>

<p align="center">
  <img src="https://img.shields.io/npm/v/filmify.svg" alt="npm version">
  <img src="https://img.shields.io/github/license/emptydev1/filmify.svg" alt="license">
</p>

<p align="center">A simple library to get information about movies by name.</p>

<h1 align="center">Instalation</h1>

<p align="center">To install this library on your machine, run the following command in your terminal:</p>

```sh-session
npm install filmify --save
```

<h1 align="center">How to Use</h1>

<p align="center">Here is an example of how to use this library:</p>

```js
const Search = require("filmify");
const film = await Search("Homem Aranha");

console.log(film);
```

<p align="center">This will return an object with the information of the found movie. Here is an example:</p>

```js
{
  id: '634649',
  title: 'Homem-Aranha: Sem Volta Para Casa',
  original_title: 'Spider-Man: No Way Home',
  font: 'https://www.themoviedb.org/',
  full_url: 'https://www.themoviedb.org/movie/634649',
  thumb: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2_filter(blur)/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
  description: 'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha...',
  language: 'Inglês',
  release_year: '2021',
  runtime: '2h 29m',
  genres: [ 'Ação', 'Aventura', 'Ficção científica' ],
  keywords: [
    'new york city',
    'loss of loved one',
    'showdown',
    'secret identity',
    'hero',
    'magic',
    'villain',
    'dangerous',
    'vigilante',
    'portal',
    'sequel',
    'superhero',
    'superhero team',
    'alternate reality',
    'masked vigilante',
    'spider web',
    'aftercreditsstinger',
    'duringcreditsstinger',
    'marvel cinematic universe (mcu)',
    'teenage hero',
    'fight for justice',
    'multiverse',
    'superhero teamup',
    'returning hero',
    'crossover',
    'teamwork'
  ],
  content_score: { score: '100', _: 'Fantástico! Ficou ótimo!' },
  situation: 'Lançado',
  budget: '$200,000,000.00'
}
```

<p><b>Notice:</b> If it was not possible to find any results for the specific movie, an empty object will be returned.</p>

<h1 align="center">Contribute</h1>

<p align="center">Feel free to contribute to this library via pull requests or issues in the GitHub repository.</p>
