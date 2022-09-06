import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html{
    font-family: 'Nunito Sans', sans-serif;
}
body{
    background-color: #191622;
    color: #f5f8f9;
}
`;
export default Global;
