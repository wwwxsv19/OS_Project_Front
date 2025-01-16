import styled from "styled-components";

// Login.js

export const LoginDiv = styled.div`
    display: flex; /* Flexbox 사용 */
    padding-top: 112px;
    gap: 38px;

    flex-direction: column; /* 세로 방향 */
    align-items: center; /* 수평 가운데 정렬 */
`;

export const LoginH1 = styled.h1`
    font-size: 40px;
    font-weight: 700; /* Bold */
    text-align: center;
`;

export const LoginPopUp = styled.div`
    display: flex; /* Flexbox 사용 */
    width: 924px; height: 389px;
    padding: 50px;
    gap: 70px;

    flex-direction: column; /* 세로 방향 */
    align-items: center; /* 수평 가운데 정렬 */

    border-radius: 20px;
    box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
`;


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
    font-weight: 700; /* Bold */
    text-align: center;
`;

export const TechP1 = styled.p`
    font-size: 24px;
    font-weight: 400; /* Regular */
    text-align: center;
`

export const TechP2 = styled.p`
    font-size: 24px;
    font-weight: 700; /* Bold */
    text-align: center;
`

export const TechItemListDiv = styled.div`
    display: flex;
    gap: 26px;

    flex-direction: row; /* 가로 방향 */
    justify-content: center; /* 가로 중앙 정렬 */
    text-align: center;
`