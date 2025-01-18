import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";
import { useEffect } from "react";

export const PokemonApp = () => {
    
    const { page, pokemons = [], isLoading } = useSelector( state => state.pokemons );
    const dispatch = useDispatch();
    
    useEffect(() => {
      
        dispatch( getPokemons() );
      
    }, []);
    
    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: { isLoading ? 'True' : 'False' }</span>
            <ul>
                {
                    pokemons.map( pokemon => (
                        <li key={ pokemon.name }>{ pokemon.name }</li>
                    ))
                }
            </ul>
            <button
                disabled={ isLoading ? true : false }
                onClick={ () => dispatch( getPokemons( page ) ) }
            >
                Next
            </button>
        </>
    )
}
