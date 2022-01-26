import styled from 'styled-components'

export const DivBlackAbsolute = styled.div<{ color?: string }>`
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0px;
    background: ${props => props.color || "black"};;
    opacity: 0.9;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    font-weight: 900;

    & h1{
        margin-bottom: 0.5em;
        font-size: 64px;
    }

    & p{
        margin-bottom: 0.5em;
        font-size: 40px;
    }

    &  button{
        padding: 10px 40px;
        border-radius: 10px;
        background-color: red;
    }
`;