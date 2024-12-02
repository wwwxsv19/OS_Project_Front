import styled from "styled-components";

export const TextBoxP = styled.p`
    margin: 0;

    font-size: 14px;
    font-weight: 700; /* BOLD */
    color : #6b6b6b;

`

export const TextBoxInput = styled.input`
    width: 300px;
    margin-top: 10px;
    padding: 6px 20px 6px 6px;

    border: 1px solid #bce2a7;
    border-radius: 6px;
    outline: none;
    
    font-size: 24px;
    font-weight: 500; /* MEDIUM */
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