"use client";
import { useAppDispatch, useAppSelector } from "@/core/redux/hooks";
import { RootState } from "@/core/redux/store";
import pokemonApi from "@/modules/pokimon/pokemon";
import { Pokemon } from "@/modules/pokimon/types";
import Image from "next/image";
import * as React from "react";
import { useEffect, useState } from "react";

export default function App() {
  const [isPokemon, setIsPokemon] = useState<string>("pikachu");
  // const { data, error, isLoading } = useGetPokemonsQuery('bulbasaur')
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(pokemonApi.endpoints.getPokemon.initiate(isPokemon)).catch(
      (error) => {
        console.error("Error fetching employees:", error);
      }
    );
  }, [dispatch, isPokemon]);

  const pokemonData = useAppSelector(
    (state: RootState) => state.baseApi.queries[`getPokemon`]?.data as Pokemon
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setIsPokemon(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <h2>{pokemonData?.name}</h2>
      {pokemonData?.sprites?.front_default ? "cha" : "chaina"}
      <div className="relative">
        {pokemonData?.sprites?.front_default && (
          <Image
            src={pokemonData!.sprites!.front_default!}
            // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbackground%2F&psig=AOvVaw1igLfoR8H6iR0ZOzTUN1as&ust=1718019207422000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMC7oLa2zoYDFQAAAAAdAAAAABAE"
            alt={pokemonData?.name}
            width={100}
            height={100}
          />
        )}
      </div>
    </div>
  );
}
