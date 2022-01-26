import Link from "next/link";
import React, { useContext } from "react";
import { ContextGlobal } from "../../contexts/ContextGlobal";

export default function ExemploUseContextGlobal() {

    const {
        exibir,
        fecharExemplo
    } = useContext(ContextGlobal)

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
                    do Hook useContextGlobal
                </p>
                <button onClick={fecharExemplo}>Fechar</button>
                <br></br>
                <Link href={`/8ConexaoBackend`} >
                    <button >Proximo Exemplo</button>
                </Link>
            </div>
        </>
    )
}