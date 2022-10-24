import React from "react";
import PokemonListItem from "./PokemonListitem";

 export default function PokemonList({ pokemons }) {
    return(
    <>
        {pokemons?.map((pokemon, index) => <PokemonListItem key={index} {...pokemon}/>)}
    </>
    );
 }