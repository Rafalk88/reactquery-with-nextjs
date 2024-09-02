async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = fetch(
    `${process.env.MOVIE_API_URL}?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

export async function getMovies() {
  const data = await getData();
  return data;
};
