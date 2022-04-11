import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}

body{
    overflow-x: hidden;
    background-color: #1b1b1b;
    color: white;
    font-family: 'Inter', sans-serif;
    @media (max-width: 1000px){
        font-size: 75%;
    }
}

*::selection{
    color:#1b1b1b;
    background-color: #23d997;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: .75rem 1.5rem;
    border: 3px solid #23d997;
    background: transparent;
    color: #23d997;
    letter-spacing: 2px;
    transition: .3s all ease;

    &:hover,
    &:focus{
        background-color: #23d997;
        color: #1b1b1b;
    }
}

h2{
    font-weight: lighter;
    font-size: 4rem;
    @media (max-width: 1000px){
        font-size: 3rem;
    }
}

h4{
    font-size: 2rem;
}

span{
    font-weight: bold;
    color: #23d997;
}

a {
    font-size: 1.1rem;
    color: white;
    text-decoration: none;
}

p{
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

`;

export default GlobalStyle;
