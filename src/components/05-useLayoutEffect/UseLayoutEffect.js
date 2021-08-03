import React, { useLayoutEffect } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetchyRef } from '../../hooks/useFetchyRef'
import './LayoutEffect.css'

export const LayoutEffect = () => {
    
    const { counter, increment } = useCounter(1);
    
    const { data } = useFetchyRef( `https://www.breakingbadapi.com/api/quotes/${ counter }` )
    
    const { quote } = !!data && data[0];
                                //esto nos dice que si exsiste la data  nos da la posicion cero de la data si no no ejecuta nada
    useLayoutEffect(() => {
        
        console.log('hey');
        
    }, [])
    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
                        
            <blockquote className="blockquote text-center">
                <p className="mb-0">{ quote }</p>
                <br />
            </blockquote>
        

            <button
            className="btn btn-primary"
            onClick={ increment }
            >
            Siguiente Frase
            </button>
            
        </div>
    )
}
