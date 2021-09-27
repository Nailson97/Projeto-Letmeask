import { useState } from "react"

export function Button() {

    function aumentar(){
        setCount( count + 1)
    }

    const [count, setCount] = useState(0)
    return (
        <div>
            <button>{count}</button>
            <button onClick={() => aumentar()}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>

    )
}