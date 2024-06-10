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
  const dispatch = useAppDispatch();
  const [debouncedInputValue, setDebouncedInputValue] = React.useState("");

  useEffect(() => {
    dispatch(pokemonApi.endpoints.getPokemon.initiate(debouncedInputValue)).catch(
      (error) => {
        console.error("Error fetching employees:", error);
      }
    );
  }, [dispatch, debouncedInputValue]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(isPokemon);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, [isPokemon]);

  const pokemonData = useAppSelector(
    (state: RootState) => state.baseApi.queries[`getPokemon`]?.data as Pokemon
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setIsPokemon(event.target.value);
  };

  return (

    <div className=" flex flex-col py-10 justify-center items-center">
      <input type="text" onChange={handleInputChange} className="border-2 border-black rounded-md w-[600px] h-12" />
      <h2 className="font-bold text-xl ">{pokemonData?.name}</h2>
      {pokemonData?.sprites?.front_default ? "Found" : "Not Found" }
      <div className="relative">
        {pokemonData?.sprites?.front_default && (
          <Image
            src={pokemonData!.sprites!.front_default!}
            alt={pokemonData?.name}
            width={300}
            height={300}
          
          />
        )}
      </div>
    </div>
  );
}
