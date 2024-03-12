import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    font-size: 62.5%;
}

body {
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_800};
    color:${({ theme }) => theme.COLORS.WHITE};
}

body, input, button, textarea{
    font-family: "Roboto", sans-serif;
	font-size:1.6rem;
}


a {
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9);
}

    ::-webkit-scrollbar {
        width: .8rem;
        }

    ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: .8rem;
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }


`