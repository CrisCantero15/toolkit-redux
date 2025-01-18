import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: realizar petición HTTP

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();
        // console.log( data );
        // const payload = {
        //     page: page + 1,
        //     pokemons: data.results
        // }

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);

        const payload = {
            page: page + 1,
            pokemons: data.results
        }

        dispatch( setPokemons( payload ) );
    }
}