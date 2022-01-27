import React, { useContext } from "react";
import ContextPagina from "../../contexts/ContextPagina";

export default function ExemploUseContext({ exibir, fecharExemplo }) {


    if(exibir !== true){
        return <></>
    }

    return (
        <>
            <div id={"divBlackAbsolute"}>
                <h1>
                    OLÁ MUNDO !
                </h1>
                <p>
                    do Hook useContext
                </p>
                <button onClick={fecharExemplo}>Fechar</button>
            </div>
        </>
    )
}