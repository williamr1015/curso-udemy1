import { useState } from "react"


export const useCounter = ( initialState = 10 ) => {

    const [counter, setState] = useState(initialState);
                        // el factor nos ayuda a tener multiples opciones en el incremento o decremento ya que es una variable se puede incrementar o disminuir de 1 en 1 o 2 en 2 etc
    const increment = () => {
        setState(counter + 1);

    }
    const decrement = () => {
        setState(counter - 1);
    }
    const reset = () => {
        setState(initialState)
    }
    return {
        counter,
        decrement,
        increment,
        reset
    };
}