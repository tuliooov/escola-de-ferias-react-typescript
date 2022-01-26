import React from "react";

export default function ExemploUseState(props: { exibir: boolean; fecharExemplo: () => void }) {

    if(props.exibir !== true){
        return <></>
    }

    return (
        <>
            <div id={"divBlackAbsolute"}>
                <h1>
                    OLÁ MUNDO !
                </h1>
                <p>
                    do Hook useState
                </p>
                <button onClick={props.fecharExemplo}>Fechar</button>
            </div>
        </>
    )
}