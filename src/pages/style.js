import styled from "styled-components";

export const LoginDiv = styled.div`
    padding-top: 116px;
`;

export const LoginH1 = styled.h1`
    font-size: 40px;
    font-weight: 700; /* BOLD */
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