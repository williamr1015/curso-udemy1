import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import './examples.css'

export const MultipleCustomHooks = () => {
    const state = useFetch( `https://www.breakingbadapi.com/api/quotes/1` )
    console.log(state);
    return (
        <div>
            <h1>Multiples custom hooks</h1>
        </div>
    )
}
