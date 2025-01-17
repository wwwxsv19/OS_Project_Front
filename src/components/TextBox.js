import React, { forwardRef } from 'react';

import * as S from './style.js';

const TextBox = forwardRef(({text, type, value, onChange}, ref) => {
    return (
        <div style = {{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <S.TextBoxP>{text}</S.TextBoxP>
            <S.TextBoxInput type = {type} placeholder = {text} value = {value} onChange = {onChange} ref = {ref} />
        </div>
    );
});

export default TextBox;