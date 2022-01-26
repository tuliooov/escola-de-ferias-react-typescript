import { AxiosResponse } from "axios";
import React, { useContext, useEffect, useState } from "react";
import api from "../../../services/api";
import { ContextGlobal } from "../../contexts/ContextGlobal";
import { DivBlackAbsolute } from "./exemplos.styles";


interface ProductsType {
    id: number
    descricao: string
    marca: string
}
interface ResponseProdutosType {
    produtos: ProductsType[]
}


export default function ExemploStyledComponent() {


    //Certifique-se que o backend está funcionando, usando a extensão ThunderClient

    const {
        exibir,
        fecharExemplo
    } = useContext(ContextGlobal)

    const [products, setProducts] = useState(null as ProductsType[])

    useEffect(() => {
        if (exibir === true && products === null) {
            api.get('/produtos')
                .then((response: AxiosResponse<ResponseProdutosType>) => {
                    console.log("response produtos", response)
                    setProducts(response.data.produtos)
                })
                .catch(() => {
                    setProducts([])
                })
        }
    }, [products, exibir])


    if (exibir !== true) {
        return <></>
    }

    return (
        <>
            <DivBlackAbsolute>
                <h1>
                    OLÁ MUNDO !
                </h1>
                <p>
                    do ConexaoBackEnd
                </p>
                {
                    products === null
                        ? <h1>
                            Buscando dados...
                        </h1>
                        : products.length === 0 ?
                            <span>Nenhum produto encontrado</span>
                            : <table>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>descricao</th>
                                        <th>marca</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product: ProductsType) => (
                                            <tr>
                                                <td>
                                                    {product.id}
                                                </td>
                                                <td>
                                                    {product.descricao}
                                                </td>
                                                <td>
                                                    {product.marca}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                }

                <button onClick={fecharExemplo}>Fechar</button>

            </DivBlackAbsolute>
        </>
    )
}