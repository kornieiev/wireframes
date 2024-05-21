export default function makeNewsMarkup(data) {
  return data
    .map(
      ({ title, author, urlToImage, content }) => `
        <div>
      <h3>${title}</h3>
      <h5>${author}</h5>
      <img src="${urlToImage}" alt="${title}" width="300"/>
    </div>
  `
    )
    .join("");
}
