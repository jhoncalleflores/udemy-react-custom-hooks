import { useState } from "react"

export const useCounter = ( valorInicial = 10 ) => {

    const [counter, setCounter] = useState(valorInicial)

    const increment = ( value = 1 ) => {
        setCounter( counter + value );
    }

    const decrement = ( value = 1 ) => {
        if (counter === 0 ) { return; }
        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( valorInicial );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}
