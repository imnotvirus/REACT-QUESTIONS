import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #000;
}
html{
    font-family: 'Nunito Sans', sans-serif;
}
body{
    background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
    
}
`;
export default Global;
