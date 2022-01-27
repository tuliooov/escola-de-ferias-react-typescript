import React, { useContext, useState } from "react";
import { ContextGlobal } from "../../contexts/ContextGlobal";

export default function ExemploStyledComponent() {


    //Certifique-se que o backend está funcionando, usando a extensão ThunderClient

    const {
        exibir,
        fecharExemplo
    } = useContext(ContextGlobal)

    const [color, setColor] = useState("#333")

    if (exibir !== true) {
        return <></>
    }

    return (
        <>
            <div id={"divBlackAbsolute"}>
                <h1>
                    OLÁ MUNDO !
                </h1>
                <p>
                    do Styled Component
                </p>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)}>
                </input>
                <button onClick={fecharExemplo}>Fechar</button>
            </div>
        </>
    )
}