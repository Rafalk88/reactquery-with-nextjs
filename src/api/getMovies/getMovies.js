async function getData() {
  const url = `https://api.themoviedb.org/3/authentication/guest_session/new`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = fetch(
    url,
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
