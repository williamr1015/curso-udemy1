import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetchyRef } from '../../hooks/useFetchyRef'
import './examples.css'

export const MultipleCustomMod = () => {
    
    const { counter, increment } = useCounter(1);
    
    const { loading, data } = useFetchyRef( `https://www.breakingbadapi.com/api/quotes/${ counter }` )
    console.log(loading);
    const { author, quote } = !!data && data[0];
                                //esto nos dice que si exsiste la data  nos da la posicion cero de la data si no no ejecuta nada

        
    console.log(author, quote);
    return (
        <div>
            <h1>Breakingbad Quotes</h1>
            <hr />


            {
                loading
                ?
                    (
                            <div className="alert alert-info text-center">
                                loading...
                            </div>
                    )
                :
                        (
                            <blockquote className="blockquote text-center">
                                <p className="mb-0">{ quote }</p>
                                <br />
                                <footer className="blockquote-footer">{ author }</footer>
                            </blockquote>
                        )
            }
            <button
            className="btn btn-primary"
            onClick={ increment }
            >
            Siguiente Frase
            </button>
            
        </div>
    )
}
