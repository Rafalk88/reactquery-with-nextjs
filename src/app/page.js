"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api";


export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: async () => await getMovies(),
    queryKey: ["movies"],
  })

  if (isLoading) return <div role="status">Loading...</div>
  if(isError) {
    console.log(error)
    return <div role="alert">Sorry There was an Error!</div>
  }

  return (
    <section className="container mx-auto">
      <h1 className="p-5 box-decoration-slice bg-gradient-to-r
        from-indigo-600 to-pink-500 text-white text-center font-bold
        text-4xl"
      >
        Query React Movies
      </h1>
      <div
        className="grid grid-cols-4 gap-4 p-10"
        role="table"
      >
        {data?.results?.map(
          (movie) => {
            return (
              <article
                key={`movie-${movie.id}`}
                role="article"
              >
                <h2>{movie.title}</h2>
                <Image
                  src={movie.poster_path}
                  alt={`img-${movie.title}`}
                />
              </article>
            );
          }
        )}
      </div>
    </section>
  );
}
