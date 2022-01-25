import React, { useContext } from "react";
import { ContextGlobal } from "../contexts/ContextGlobal";

export default function Number3() {

    const {
        valor, setValor
      } = useContext(ContextGlobal);

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