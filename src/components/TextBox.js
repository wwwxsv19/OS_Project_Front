import React, { forwardRef } from 'react';
import * as S from './style.js';

const TextBox = forwardRef(({text, type, style, value, onChange}, ref) => {
    return (
        <div style = {style} >
            <S.TextBoxP>{text}</S.TextBoxP>
            <S.TextBoxInput type = {type} placeholder={text} value = {value} onChange = {onChange} ref = {ref} />
        </div>
    );
});

export default TextBox;