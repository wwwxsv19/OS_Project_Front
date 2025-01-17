import styled from "styled-components";

// Login.js

export const LoginDiv = styled.div`
    display: flex; 
    padding-top: 100px;
    gap: 38px;

    flex-direction: column;
    align-items: center; 
`;

export const LoginTextP = styled.div`
    display: flex;
    gap: 10px;

    flex-direction: column;
    align-items: center;
`

export const LoginH1 = styled.h1`
    font-size: 40px;
    font-weight: 700; 
    text-align: center;
`;

export const LoginPopUpDiv = styled.div`
    display: flex;
    width: 924px; height: 389px;
    padding: 50px;
    gap: 70px;

    flex-direction: column; 
    align-items: center; 

    border-radius: 20px;
    box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
`;

export const LoginPopUpTextBoxListDiv = styled.div`
    display: flex;
    gap: 30px;

    flex-direction: column;
`

export const LoginErrorP = styled.p`
    color: #C23A3A;
`


// Tech.js

export const TechDiv = styled.div`
    display: flex;
    width: 100vw; padding-top: 150px;
    flex-direction: column;    
    gap: 110px;
`

export const TechTextDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;    
    gap: 10px;
`

export const TechH1 = styled.h1`
    font-size: 60px;
    font-weight: 700;
    text-align: center;
`;

export const TechP1 = styled.p`
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`

export const TechP2 = styled.p`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
`

export const TechItemListDiv = styled.div`
    display: flex;
    gap: 26px;

    justify-content: center; 
    text-align: center;
`


// New.js

export const NewDiv = styled.div`
    display: flex;
    gap: 30px;
    margin: 54px 100px;

    flex-direction: column;
`

export const NewHeaderDiv = styled.div`
    display: flex;
    position: relative;
    width: 1018px;
    gap: auto;

    flex-direction: row;   
`

export const NewHeaderButtonListDiv = styled.div`
    display: flex;
    position: absolute; 
    top: 0px; right: 0px;
    gap: 30px;
`