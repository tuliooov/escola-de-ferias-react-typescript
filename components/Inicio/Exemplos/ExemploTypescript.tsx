import React from "react";

export default function ExemploTypescript({ exibir }) {

    // Vamos juntos adicionar a tipagem da props

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
                    do Typescript
                </p>
            </div>
        </>
    )
}