const { load } = require("cheerio");

async function get_film(id) {
    const url = `https://www.themoviedb.org/movie/${id}`;
    const req = await fetch(url, {
        headers: { "Accept-Language": "pt-BR" }
    }).then(e => e.text());
    const $ = load(req, { lowerCaseTags: true }, true);
    
    if ($("title").text() == "Oops! We can't find the page you're looking for") return {};
    
    const thumb = $("div.poster img").attr("src");
    const film = {
        id,
        title: $("h2").text().trim().split(/\n/)[0],
        original_title: $('strong:contains("Título original")').parent().text().replace("Título original", "").trim(),
        font: "https://www.themoviedb.org/",
        full_url: url,
        thumb: thumb ? `https://www.themoviedb.org${thumb}` : null,
        description: $('meta[name="description"]')[0].attribs["content"],
        language: $('strong:contains("Idioma original")').parent().text().replace("Idioma original", "").trim(),
        release_year: $(".tag.release_date").text().match(/\((\d{4})\)/)?.[1],
        runtime: $(".runtime").text().trim(),
        genres: [],
        keywords: $('.keywords.right_column > ul').parent().text().trim().replace("Palavras-chave", "").trim().split("\n").map(e => e.trim()),
        content_score: {
            score: $('h4:contains("Avaliação do conteúdo")').siblings(".content_score").children("div").children("p").text().trim(),
            _: $('h4:contains("Avaliação do conteúdo")').siblings("p").text().trim()
        },
        situation: $('strong:contains("Situação")').parent().text().replace("Situação", "").trim(),
        budget: $('strong:contains("Orçamento")').parent().text().replace("Orçamento", "").trim()
    };
    
    $(".genres > a").each((_, el) => {
        film.genres.push($(el).text().trim());
    });

    return film;
}

async function search(name) {
    const req = await fetch(`https://www.themoviedb.org/search?query=${encodeURIComponent(name)}`, {
        headers: { "Accept-Language": "pt-BR" } 
    }).then(e => e.text());
    const $ = load(req, { lowerCaseTags: true }, true);
    
    return await get_film($("a.result")[0].attribs.href.slice(1).split("/")[1]);
}

module.exports = search;
