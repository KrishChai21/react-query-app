import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

function CharacterList() {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, status } = useQuery(["characters", page], fetchCharacters);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (status === "error") {
    return <h1>An error occured...</h1>;
  }

  return (
    <div className="characters">
      {data.results.map((character) => {
        {
          /* Using the spread operator */
        }
        return <Character {...character} />;
      })}
      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage((prevVal) => prevVal - 1)}
        >
          Previous
        </button>
        <button
          disabled={data.info.next === null}
          onClick={() => setPage((prevVal) => prevVal + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CharacterList;
