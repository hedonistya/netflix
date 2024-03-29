export default function getFilter({series, films} = []) {
  return {
    series: [
      {
        title: "Crime",
        data: series?.filter((item) => item.genre === "crime"), // проверяет на пустоту series, проверяет и присваивает значение
      },
      {
        title: "Feel Good",
        data: series?.filter((item) => item.genre === "feel-good"),
      },
      {
        title: "Children",
        data: series?.filter((item) => item.genre === "children"),
      },
      {
        title: "Documentaries",
        data: series?.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series?.filter((item) => item.genre === "comedies"),
      },
    ],
    films: [
      {
        title: "Suspense",
        data: films?.filter((item) => item.genre === "suspense"),
      },
      {
        title: "Romance",
        data: films?.filter((item) => item.genre === "romance"),
      },
      {
        title: "Children",
        data: films?.filter((item) => item.genre === "children"),
      },
      {
        title: "Drama",
        data: films?.filter((item) => item.genre === "drama"),
      },
      {
        title: "Thriller",
        data: films?.filter((item) => item.genre === "thriller"),
      },
    ],
  };
}
