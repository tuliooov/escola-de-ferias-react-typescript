import React from "react";

export default function Number2(props: { valor: number; setValor: React.Dispatch<React.SetStateAction<number>>; }) {

    const {
        valor,
        setValor
    } = props

    return (
        <>
            <div id={"div"}>
                <h1>
                    {valor}
                </h1>
                <button onClick={() => setValor(valor+1)}>
                    ADD 1
                </button>
            </div>
        </>
    )
}