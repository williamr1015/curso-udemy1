import React from 'react'
//import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks'
//import { CounterApp } from './components/01-useSatate/CounterApp'
//import { CounterWhitCustomHook } from './components/01-useSatate/CounterWhitCustomHook'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
//import { SimpleForm } from './components/02-useEffect/SimpleForm'


export const HookApp = () => {
    return (
        <div>
            {/* <CounterApp />
            <CounterWhitCustomHook />
            <SimpleForm /> */}
             <FormWithCustomHook /> 
            {/* <MultipleCustomHooks /> */}
        </div>
    )
}
