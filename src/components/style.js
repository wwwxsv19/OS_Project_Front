import styled from "styled-components";

// GreenButton.js

export const GreenBtn = styled.button` 
    width: 168px; height: 62px;
    padding: 10px;

    border: none;
    border-radius: 10px;
    background-color: #BCE2A7;

    font-size: 24px;
    font-weight: 700;
    color: #000000;

    transition: all 120ms ease-out;

    &:disabled {
        background-color: #CECECE;
        color: #6B6B6B;

        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background-color: #96B586;
    }
`


// WhiteButton.js

export const WhiteBtn = styled.button` 
    width: 168px; height: 62px;
    padding: 10px;

    border: 1px solid #BCE2A7;
    border-radius: 10px;
    background-color: #FFFFFF;

    font-size: 24px;
    font-weight: 700;
    color: #000000;

    transition: all 120ms ease-out;

    &:disabled {
        background-color: #CECECE;
        color: #6B6B6B;

        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background-color: #EAEAEA;
    }
`


// SideBarProfile.js

export const SideBarProfileDiv = styled.div`
    display: flex;
    gap: 14px;

    flex-direction: column;
    align-items: center;
`

export const SideBarProfileImg = styled.img`
    width: 100px; height: 100px;

    border: 1px solid #DBEED0;
    border-radius: 100px;

    alt: 'ProfileImg';
`

export const SideBarProfileP = styled.p`
    font-size: 20px;
    font-weight: 700;
`


// SideBarGreenItem.js

export const SideBarGreenButtonListDivP = styled.div`
    display: flex;
    padding: 0px 20px;
    gap: 10px;

    flex-direction: column;
`

export const SideBarGreenButtonListDivC = styled.div`
    display: flex;
    gap: 20px;

    flex-direction: column;
`

export const SideBarGreenButtonDiv = styled.div`
    display: flex;
    width: 150px; height: 54px;
    padding-left: 30px;
    gap: 10px;

    align-items: center; /* 수평 가운데 정렬 */
    
    background-color: #DBEED0; 
    border-radius: 100px;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);

    transition : background-color 0.2s ease-out;

    &:hover {
        background-color: #C9E6B9; 
    }
`

export const SideBarGreenButtonP = styled.p`
    font-size: 16px;
    font-weight: 700;
`

export const SideBarListP = styled.p`
    font-size: 18px;
    font-weight: 700;
`


// SideBarGrayButton.js

export const SideBarGrayButtonDiv = styled.div`
    display: flex;
    width: 172px; height: 32px;
    padding: 4px; 
    gap: 10px;

    align-items: center;

    & > * {
        transition : all 0.2s ease-out;
    }

    &:hover {
        & > * {
            color: #000000;
            fill: #000000;         
        }
    }
`

export const SideBarGrayButtonP = styled.p`
    color: #6B6B6B;
    font-size: 16px;
    font-weight: 700;
`

export const SideBarGrayButtonListDivP = styled.div`
    display: flex;
    padding: 0px 20px;
    gap: 10px;

    flex-direction: column;
`


// SideBar.js

export const SideBarDiv = styled.div`
    display: flex;
    height: 100vh;
    gap: 50px;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #BCE2A7;
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

    border: 1px solid #BCE2A7;
    border-radius: 6px;
    outline: none;
    
    font-size: 20px;
    font-weight: 500; /* Medium */
    color: #000000;
    
    &::placeholder {
        font-size: 20px;
        font-weight: 400; /* Regular */
        color: #CECECE;   
    }

    &:focus {
        outline: 1.5px solid #BCE2A7;
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


// TitleInput.js

export const TitleInput = styled.input`
    border: none;

    color: #000000;
    font-size: 50px;
    font-weight: 700;

    &::placeholder {
        color: #CECECE;
    }

    &:focus {
        outline: none;
    }
`


// ExplainInput.js

export const ExplainInput = styled.input`
    width: 1018px;
    
    border: none;

    color: #000000;
    font-size: 24px;
    font-weight: 500;

    &::placeholder {
        color: #CECECE;
    }

    &:focus {
        outline: none;
    }
`


// ContentInput.js

export const ContentDiv = styled.div`
    width: 976px; height: 636px;
    padding: 20px;

    border: 1px solid #BCE2A7;
    border-radius: 10px;
`

export const ContentTextarea = styled.p`
    contenteditable: true;

    width: 976px;
    height: 636px;

    border: none;

    color: #000000;
    font-size: 26px;
    font-weight: 300px;

    &:empty::before {
        content: attr(placeholder); 
        color: #CECECE;
    }

    &:focus {
        outline: none;
    }
`