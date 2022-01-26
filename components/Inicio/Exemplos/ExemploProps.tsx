import React from "react";

export default function ExemploProps(props) {

    // desestruturar props

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
                    do Props
                </p>
            </div>
        </>
    )
}