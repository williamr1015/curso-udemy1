import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWhitCustomHook = () => {

    const {state:counter, increment, decrement, reset} = useCounter();
    return (
        <>
          <h1>Counter whit hook { counter }</h1>
          <hr />

          <button 
          onClick={ () => increment(2)}
          className="btn btn-primary"
          >+1</button>
          <button 
          onClick={reset}
          className="btn btn-warning"
          >Reset</button>
          <button 
          onClick={ () => decrement (2)}
          className="btn btn-danger"
          >-1</button>
        </>
    )
}
