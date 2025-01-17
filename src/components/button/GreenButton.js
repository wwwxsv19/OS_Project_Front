import * as S from '../style.js';

function GreenButton({ text, onClick, disabled }) {
    return (
        <S.GreenBtn onClick = {onClick} disabled = {disabled}>{text}</S.GreenBtn>
    )
}

export default GreenButton;