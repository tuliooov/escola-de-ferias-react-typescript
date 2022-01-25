import React from "react";

export default function Number1() {
    console.log('RODEI NUMBER')
    const [ valor, setValor ] = React.useState(0)
    const [ nome, setNome ] = React.useState('')


    return (
        <>
            <div id={"div"}>
                <h1>
                    {nome} - {valor}
                </h1>
                <button onClick={() => setValor(valor+1)}>
                    ADD 1
                </button>
                <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
        </>
    )
}