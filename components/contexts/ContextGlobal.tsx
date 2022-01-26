import React, { useState } from 'react';

export const ContextGlobal  = React.createContext(null);

export function ContextGlobalProvider(parametros) {
   const {
      children
   } = parametros
   
   const [exibirExemploProps, setExibirExemploProps] = useState(false)

  const abrirExemplo = () => {
    setExibirExemploProps(true)
  }

  const fecharExemplo = () => {
    setExibirExemploProps(false)
  }

    return(
       <ContextGlobal.Provider
          value = {{
            exibir: exibirExemploProps,
            fecharExemplo: fecharExemplo,
            abrirExemplo: abrirExemplo 
          }}
       >
          {children}
       </ContextGlobal.Provider>
    )
 } 