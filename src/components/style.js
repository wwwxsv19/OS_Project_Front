import styled from "styled-components";

// SideBar.js

export const SideBarDiv = styled.div`
    display: flex;
    height: 100vh;
    padding: 0px 20px;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #BCE2A7;
`

export const SideBarItem = styled.div`
    display: flex;
    width: 150px; height: 54px;
    padding-left: 30px;
    gap: 10px;

    align-items: center; /* 수평 가운데 정렬 */
    
    background-color: #DBEED0; 
    border-radius: 100px;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
`


// TextBox.js

export const TextBoxP = styled.p`
    font-size: 14px;
    font-weight: 700; /* Bold */
    color: #6b6b6b;

`

export const TextBoxInput = styled.input`
    width: 300px; height: 44px;
    padding: 6px;

    border: 1px solid #bce2a7;
    border-radius: 6px;
    outline: none;
    
    font-size: 20px;
    font-weight: 500; /* Medium */
    color: #000000;
    
    &::placeholder {
        font-size: 20px;
        font-weight: 400; /* Regular */
        color: #cecece;   
    }

    &:focus {
        outline: 1.5px solid #bce2a7;
    }
`;


// TechItem.js

export const TechItemDiv = styled.div`
    display: flex;
    width: 180px; height: 232px;
    padding: 18px 26px; gap: 20px;

    flex-direction: column; /* 세로 방향 */
    align-items: center; /* 수평 가운데 정렬 */
    text-align: center;

    border-radius: 10px;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);

    transition : transform 0.2s ease-out;

    &:hover {
        transform: scale(1.05); 
    }
`

export const TechItemP = styled.p`
    font-size: 24px;
    font-weight: 600; /* SemiBold */
    color: #000000;

    text-align: center
`