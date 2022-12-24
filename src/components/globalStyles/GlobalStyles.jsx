import {createGlobalStyle} from "styled-components"

// Sayfa ayarlarında aynı olacak temek CSS stillendirmesini verdim.
export const GlobalStyles= createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

body{
    font-size: 1.3rem;
    font-weight: 700;
    background-color: ${({theme})=>theme.colors.mainColor}
}

`