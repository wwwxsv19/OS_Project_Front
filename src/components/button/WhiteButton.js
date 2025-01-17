import * as S from '../style.js';

function WhiteButton({ text, onClick, disabled }) {
    return (
        <S.WhiteBtn onClick = {onClick} disabled = {disabled}>{text}</S.WhiteBtn>
    )
}

export default WhiteButton;