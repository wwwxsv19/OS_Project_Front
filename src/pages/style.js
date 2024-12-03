import styled from "styled-components";

// Login.js

export const LoginDiv = styled.div`
    padding-top: 116px;
`;

export const LoginH1 = styled.h1`
    font-size: 40px;
    font-weight: 700; /* Bold */
    text-align: center;
`;

export const LoginPopUp = styled.div`
    display: flex; /* Flexbox 사용 */
    width: 924px; height: 389px;
    margin: 64px auto 0px; padding: 70px 50px 50px 50px;

    flex-direction: column; /* 세로 방향 */
    align-items: center; /* 수평 가운데 정렬 */

    border-radius: 20px;
    box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
`;


// Home.js

export const HomeH1 = styled.h1`
    margin: 150px auto 0px;

    font-size: 60px;
    font-weight: 700; /* Bold */
    text-align: center;
`;

export const HomeP1 = styled.p`
    margin: 10px auto 0px auto;

    font-size: 24px;
    font-weight: 400; /* Regular */
    text-align: center;
`

export const HomeP2 = styled.p`
    font-size: 24px;
    font-weight: 700; /* Bold */
    text-align: center;
`

export const TechDiv = styled.div`
    display: flex;
    margin-top: 34px;

    flex-direction: row; /* 가로 방향 */
    justify-content: center; /* 가로 중앙 정렬 */
    text-align: center;
`