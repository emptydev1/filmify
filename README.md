<h1 align="center">Movies</h1>

<p align="center">
  <img src="https://img.shields.io/npm/v/movies.svg" alt="npm version">
  <img src="https://img.shields.io/github/license/emptydev1/movies.svg" alt="license">
</p>

<p align="center">Uma biblioteca simples para obter informações sobre filmes através do nome.</p>

<h1 align="center">Instalação</h1>

<p align="center">Para instalar esta biblioteca em sua máquina diretamente do GitHub, execute o seguinte comando em seu terminal:</p>

```sh-session
npm install emptydev1/movies
```

<h1 align="center">Como utilizar</h1>

<p align="center">Aqui está um exemplo de como usar esta biblioteca:</p>

```js
const search = require("movies");
const film = await search("Homem Aranha");

console.log(film);
```

<p align="center">Isso retornará um objeto com as informações do filme encontrado. Aqui está um exemplo:</p>

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

<h1 align="center">Contribuir</h1>

<p align="center">Sinta-se à vontade para contribuir com esta biblioteca por meio de pull requests ou issues no repositório do GitHub.</p>
